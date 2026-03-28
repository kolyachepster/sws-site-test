// Firebase конфигурация
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    query, 
    where, 
    orderBy, 
    arrayUnion,
    limit
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDVKjnhK6i6Y7iT-OA24ccRbLKp7EY22Ug",
    authDomain: "my-dub-site.firebaseapp.com",
    projectId: "my-dub-site",
    storageBucket: "my-dub-site.firebasestorage.app",
    messagingSenderId: "302896869866",
    appId: "1:302896869866:web:a003a8f24d682cb3ac0293"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;
let isAdmin = false;

// ============ ФУНКЦИИ АВТОРИЗАЦИИ ============
function getCurrentUser() {
    return currentUser;
}

function isUserAdmin() {
    return isAdmin;
}

async function login(email, password) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: result.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function register(email, password) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(result.user);
        await setDoc(doc(db, "users", result.user.uid), {
            email: email,
            nickname: email.split('@')[0],
            role: "user",
            regDate: new Date().toLocaleDateString('ru-RU'),
            views: 0,
            avatar: "",
            achievements: ["🚀 Первооткрыватель"]
        });
        return { success: true, user: result.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function logout() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function getUserData(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return null;
}

async function updateProfile(uid, data) {
    await updateDoc(doc(db, "users", uid), data);
}

// ============ ФУНКЦИИ ДЛЯ ТАЙТЛОВ ============
async function getAllTitles() {
    const snap = await getDocs(collection(db, "titles"));
    const titles = [];
    snap.forEach(doc => {
        titles.push({ id: doc.id, ...doc.data() });
    });
    return titles;
}

async function getTitleById(id) {
    const docRef = doc(db, "titles", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
}

async function getFeaturedTitles(limitCount = 3) {
    const snap = await getDocs(query(collection(db, "titles"), limit(limitCount)));
    const titles = [];
    snap.forEach(doc => {
        titles.push({ id: doc.id, ...doc.data() });
    });
    return titles;
}

async function addTitle(titleData) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    try {
        await addDoc(collection(db, "titles"), {
            ...titleData,
            date: Date.now()
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function deleteTitle(titleId) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    try {
        await deleteDoc(doc(db, "titles", titleId));
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ============ ФУНКЦИИ ДЛЯ КОМАНДЫ ============
async function getAllTeam() {
    const snap = await getDocs(collection(db, "team"));
    const team = [];
    snap.forEach(doc => {
        team.push({ id: doc.id, ...doc.data() });
    });
    return team;
}

async function getVoiceById(id) {
    const docRef = doc(db, "team", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
}

async function addTeamMember(memberData) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    try {
        await addDoc(collection(db, "team"), memberData);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function deleteTeamMember(memberId) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    try {
        await deleteDoc(doc(db, "team", memberId));
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ============ ФУНКЦИИ ДЛЯ НОВОСТЕЙ ============
async function getAllNews() {
    const snap = await getDocs(query(collection(db, "news"), orderBy("date", "desc")));
    const news = [];
    snap.forEach(doc => {
        news.push({ id: doc.id, ...doc.data() });
    });
    return news;
}

async function addNews(newsData) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    try {
        await addDoc(collection(db, "news"), {
            ...newsData,
            date: new Date().toISOString().split('T')[0],
            views: 0
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function incrementNewsViews(newsId) {
    const newsRef = doc(db, "news", newsId);
    const newsSnap = await getDoc(newsRef);
    if (newsSnap.exists()) {
        const currentViews = newsSnap.data().views || 0;
        await updateDoc(newsRef, { views: currentViews + 1 });
    }
}

// ============ ФУНКЦИИ ДЛЯ ПОИСКА ============
async function searchTitles(query) {
    const allTitles = await getAllTitles();
    const searchQuery = query.toLowerCase();
    return allTitles.filter(title => 
        title.name?.toLowerCase().includes(searchQuery) ||
        title.name_en?.toLowerCase().includes(searchQuery) ||
        title.description?.toLowerCase().includes(searchQuery)
    );
}

async function searchTeam(query) {
    const allTeam = await getAllTeam();
    const searchQuery = query.toLowerCase();
    return allTeam.filter(member => 
        member.name?.toLowerCase().includes(searchQuery) ||
        member.name_en?.toLowerCase().includes(searchQuery) ||
        member.status?.toLowerCase().includes(searchQuery) ||
        member.bio?.toLowerCase().includes(searchQuery)
    );
}

// ============ ФУНКЦИИ ДЛЯ АДМИНИСТРАТОРА ============
async function giveAchievement(email, achievement) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    try {
        const q = query(collection(db, "users"), where("email", "==", email));
        const snap = await getDocs(q);
        if (!snap.empty) {
            const userDoc = snap.docs[0];
            await updateDoc(doc(db, "users", userDoc.id), {
                achievements: arrayUnion(achievement)
            });
            return { success: true };
        }
        return { success: false, error: "Пользователь не найден" };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ============ ФУНКЦИЯ ДЛЯ ИНИЦИАЛИЗАЦИИ БД (загрузка данных из JSON) ============
async function initDatabaseFromJSON(jsonData) {
    if (!isAdmin) return { success: false, error: "Нет прав" };
    
    try {
        // Загрузка тайтлов
        if (jsonData.titles) {
            for (const title of jsonData.titles) {
                await addDoc(collection(db, "titles"), title);
            }
        }
        
        // Загрузка команды
        if (jsonData.team) {
            for (const member of jsonData.team) {
                await addDoc(collection(db, "team"), member);
            }
        }
        
        // Загрузка новостей
        if (jsonData.news) {
            for (const news of jsonData.news) {
                await addDoc(collection(db, "news"), news);
            }
        }
        
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Слушатель авторизации
onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    if (user) {
        const userData = await getUserData(user.uid);
        isAdmin = userData?.role === 'admin';
        
        // Обновляем UI
        const authBtn = document.getElementById('navAuthBtn');
        const profileBtn = document.getElementById('navProfileBtn');
        
        if (authBtn) {
            authBtn.textContent = `👤 ${userData?.nickname || user.email?.split('@')[0] || 'Профиль'}`;
            authBtn.href = 'profile.html';
        }
        if (profileBtn) {
            profileBtn.style.display = 'inline-block';
        }
        
        // Показываем админ-панель
        const adminPanel = document.getElementById('admin-panel');
        if (adminPanel && isAdmin) {
            adminPanel.style.display = 'block';
        }
    } else {
        isAdmin = false;
        const authBtn = document.getElementById('navAuthBtn');
        const profileBtn = document.getElementById('navProfileBtn');
        
        if (authBtn) {
            authBtn.textContent = '🔑 Войти';
            authBtn.href = 'login.html';
        }
        if (profileBtn) {
            profileBtn.style.display = 'none';
        }
    }
});

// Экспорт
window.firebase = {
    auth,
    db,
    getCurrentUser,
    isUserAdmin,
    login,
    register,
    logout,
    getUserData,
    updateProfile,
    getAllTitles,
    getTitleById,
    getFeaturedTitles,
    addTitle,
    deleteTitle,
    getAllTeam,
    getVoiceById,
    addTeamMember,
    deleteTeamMember,
    getAllNews,
    addNews,
    incrementNewsViews,
    searchTitles,
    searchTeam,
    giveAchievement,
    initDatabaseFromJSON
};

console.log('✅ Firebase инициализирован');
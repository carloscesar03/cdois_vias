import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const db = getFirestore(); // Assumindo firebase já inicializado no main
const oacRef = collection(db, "oacs");

export async function carregarDadosOAC() {
    const lista74 = [
        { estaca: '1+12,80', tipo: 'BSCC 1,00x1,00', categoria: 'Ampliação' },
        // ... (restante dos 74 itens aqui)
    ];

    for (const item of lista74) {
        await addDoc(oacRef, { ...item, status: 'pendente', concluido: false });
    }
    console.log("Banco OAC atualizado com sucesso.");
}
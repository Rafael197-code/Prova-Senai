"use client"
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function cadastrarProduto() {
    console.log("Nome:", nome);
    console.log("Preço:", preco);
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Cadastrar Lanche
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome do lanche
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite nome do lanche"
            className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preço
          </label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Digite o preço"
            className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-blue-500"
          />
        </div>

        <button
          onClick={cadastrarProduto}
          className="w-full bg-blue-600 text-white p-2 rounded text-sm font-medium hover:bg-blue-700 shadow-sm transition-colors"
        >
          Adicionar Lanche
        </button>
      </div>
    </main>
  );
}

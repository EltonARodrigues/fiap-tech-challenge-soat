import { Produto } from "core/domain/produto";
import ProdutoRepository from "../ports/produtoRepository";

export default class ProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) { }

    async criaProduto(produto: Produto): Promise<Produto> {
        return this.produtoRepository.criaProduto(produto);
    }

    async deletaProduto(idProduto: string): Promise<number> {
        return this.produtoRepository.deletaProduto(idProduto);
    }

    async editaProduto(idProduto: string, produto: Produto): Promise<Produto | undefined> {
        return this.produtoRepository.editaProduto(idProduto, produto);
    }

    async listaProdutos(filtro: any): Promise<Produto[]> {
        const produtos = this.produtoRepository.listaProdutos(filtro);
        return produtos;
    }

    async retornaProduto(idProduto: string): Promise<Produto | undefined> {
        return this.produtoRepository.retornaProduto(idProduto);
    }
}
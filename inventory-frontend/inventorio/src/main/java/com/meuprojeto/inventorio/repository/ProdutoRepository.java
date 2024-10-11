package com.meuprojeto.inventorio.repository;

import com.meuprojeto.inventorio.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}

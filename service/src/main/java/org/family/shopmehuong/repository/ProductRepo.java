package org.family.shopmehuong.repository;

import org.family.shopmehuong.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {
}

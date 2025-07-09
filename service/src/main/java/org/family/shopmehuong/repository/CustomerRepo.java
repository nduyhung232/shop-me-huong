package org.family.shopmehuong.repository;

import org.family.shopmehuong.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
}

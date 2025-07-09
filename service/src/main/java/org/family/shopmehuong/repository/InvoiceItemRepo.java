package org.family.shopmehuong.repository;

import org.family.shopmehuong.model.entity.InvoiceItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceItemRepo extends JpaRepository<InvoiceItem, Long> {
}

package com.mao.stackerapi.repository.security;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mao.stackerapi.models.security.LoginBO;
import com.mao.stackerapi.models.security.PermisoBO;


@Repository
public interface IPermisoRepository extends JpaRepository<PermisoBO, Long> {

}

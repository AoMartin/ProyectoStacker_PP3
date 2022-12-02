package com.mao.stackerapi.repository.api;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mao.stackerapi.models.api.ComentarioBO;

/**
 * <h1>IComentarioRepository</h1>
 *
 * @author molsson
 * @version 1.0
 * @since 20/11/2022
 *
 */
@Repository
public interface IComentarioRepository extends JpaRepository<ComentarioBO, Long> {

	public List<ComentarioBO> findByPublicacionIdPublicacionOrderByFechaHoraCreacion(Long idPub);
	
	public List<ComentarioBO> findByPublicacionIdPublicacionOrderByPuntajeDesc(Long idPub);
}

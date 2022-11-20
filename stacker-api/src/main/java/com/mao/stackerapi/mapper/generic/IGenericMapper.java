package com.mao.stackerapi.mapper.generic;

/**
 * <p>
 * Mapeo de entidades generico
 * </p>
 *
 * @author molsson
 * @since 20/11/2022
 */
public interface IGenericMapper<D,B> {
    public D toDTO(B bo);
    public B fromDTO(D dto);
}

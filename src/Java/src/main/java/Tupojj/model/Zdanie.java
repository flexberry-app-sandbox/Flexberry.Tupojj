package Tupojj.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tupojj.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Здание
 */
@Entity(name = "IISTupojjЗдание")
@Table(schema = "public", name = "Здание")
public class Zdanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "nomer")
    private Integer nomer;

    @Column(name = "этаж")
    private Integer этаж;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gorod")
    @Convert("Gorod")
    @Column(name = "Город", length = 16, unique = true, nullable = false)
    private UUID _gorodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gorod", insertable = false, updatable = false)
    private Gorod gorod;


    public Zdanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getnomer() {
      return nomer;
    }

    public void setnomer(Integer nomer) {
      this.nomer = nomer;
    }

    public Integer getэтаж() {
      return этаж;
    }

    public void setэтаж(Integer этаж) {
      this.этаж = этаж;
    }


}
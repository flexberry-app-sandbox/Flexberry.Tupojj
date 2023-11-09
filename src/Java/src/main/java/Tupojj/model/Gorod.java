package Tupojj.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tupojj.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Город
 */
@Entity(name = "IISTupojjГород")
@Table(schema = "public", name = "Город")
public class Gorod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;


    public Gorod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getid() {
      return id;
    }

    public void setid(Integer id) {
      this.id = id;
    }

    public String getname() {
      return name;
    }

    public void setname(String name) {
      this.name = name;
    }


}
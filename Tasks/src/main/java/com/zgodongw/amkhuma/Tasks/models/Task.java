package com.zgodongw.amkhuma.Tasks.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;


@Entity
@Table(name = "Task")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Task {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String desc;

    @Column(name = "type")
    private int type;

    @Column(name = "color")
    private String color;



    public Task(@JsonProperty("id") int id,
                @JsonProperty("title") String title,
                @JsonProperty("desc") String desc,
                @JsonProperty("type") int type
    ) {
        super();
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.type = type;
    }

    public Task() {
        super();
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDesc() {
        return desc;
    }

    public int getType() {
        return type;
    }

    public String getColor() {
        return color;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public void setType(int type) {
        this.type = type;
    }

    public void setColor(String color) {
        this.color = color;
    }
}

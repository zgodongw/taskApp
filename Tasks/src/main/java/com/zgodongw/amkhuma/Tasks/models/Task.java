package com.zgodongw.amkhuma.Tasks.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Task {

    private int id;
    private String title;
    private String desc;
    private int type;

    public Task(@JsonProperty("id") int id,
                @JsonProperty("title") String title,
                @JsonProperty("desc") String desc,
                @JsonProperty("type") int type
    ) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.type = type;
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
}

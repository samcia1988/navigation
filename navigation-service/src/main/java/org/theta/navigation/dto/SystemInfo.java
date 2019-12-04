package org.theta.navigation.dto;

import io.swagger.annotations.ApiModelProperty;

public class SystemInfo {

    @ApiModelProperty(name = "系统名称")
    private String system;
    @ApiModelProperty(name = "系统地址")
    private String url;

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
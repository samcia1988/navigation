package org.theta.navigation.dto;

import java.util.List;

import io.swagger.annotations.ApiModelProperty;

public class NavigationInfo {

    @ApiModelProperty(name = "系统信息")
    private List<SystemInfo> systems;

    public List<SystemInfo> getSystems() {
        return systems;
    }

    public void setSystems(List<SystemInfo> systems) {
        this.systems = systems;
    }

}
package org.theta.navigation.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.alibaba.fastjson.JSON;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.theta.navigation.dto.NavigationInfo;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Controller
@Api(value = "All-In-On Controller", description = "所有的接口都在这儿了")
public class AioController {

    @GetMapping("/index")
    @ApiOperation(value = "Index", notes = "只是个测试", httpMethod = "GET")
    public @ResponseBody String index() {
        return "Hello,Navigation!!!";
    }

    @GetMapping("/getNavigations")
    public @ResponseBody NavigationInfo getNavigations() throws IOException {
        return this.readNavigationInfo();
    }

    private synchronized NavigationInfo readNavigationInfo() throws IOException {
        Path fpath = Paths.get("navigation.data");
        if (!Files.exists(fpath))
            Files.createFile(fpath);
        BufferedReader bfr = Files.newBufferedReader(fpath);
        final StringBuilder data = new StringBuilder();
        bfr.lines().forEach(line -> {
            data.append(line);
        });
        bfr.close();
        NavigationInfo nInfo=JSON.parseObject(data.toString(), NavigationInfo.class);
        return nInfo;
    }

}
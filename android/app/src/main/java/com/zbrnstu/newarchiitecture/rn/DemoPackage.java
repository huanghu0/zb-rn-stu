package com.zbrnstu.newarchiitecture.rn;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.zbrnstu.newarchiitecture.viewmanager.InfoViewGroupManager;
import com.zbrnstu.newarchiitecture.viewmanager.InfoViewManager;

import java.util.ArrayList;
import java.util.List;

public class DemoPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext context){
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AppModule(context));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext context) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new InfoViewManager());
        viewManagers.add(new InfoViewGroupManager());
        return viewManagers;
    }
}

package com.zbrnstu;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class TestActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test);
        TextView tv = findViewById(R.id.tv_test);
//        openURl的方式
//        Intent intent = getIntent();
//        Uri data = intent.getData();
//        if(data != null){
//            String name = data.getQueryParameter("name");
//            tv.setText("姓名:"+name);
//        }
        // setIntent方式
        Intent intent = getIntent();
        String name = intent.getStringExtra("name");
        tv.setText("姓名:"+name);
    }
}


"use strict";

// 宣言
var myBox;

// Object
function myBox() {
  this.w = 80;
  this.h = 80;
  this.d = 80;
}

function setup() {
  //  宣言
  var gui;

  createCanvas(200, 200, WEBGL);
  // インスタンス
  myBox = new myBox();

  gui = new dat.GUI();
  gui.add(myBox, "w").step(10).min(50).max(100);
  gui.add(myBox, "h", 50, 100, 10);
  gui.add(myBox, "d", 10, 100);
}

// 描画
function draw() {
  background(60, 120, 200, 0);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  noFill();
  stroke(255);
  box(myBox.w, myBox.h, myBox.d);
}

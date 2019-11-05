//キャラクターの初期データ
const player = {
    x: 90,
    y: 30,
    speed: 1,
    flip: 0  //キャラクターの向き
}


//初期化処理
engine.onInit = () => {};

//ゲームのループ処理
engine.onUpdate = () => {

    //ゲームステージの表示
    engine.screen.drawMap(0,0,-1,-1,0,0,0);

    //キャラクターの表示
    drawPlayer();

};


//キャラクターの表示と制御
function drawPlayer() {
    
  const i = engine.input;
  
  //PCキーボードから入力を取得
  //X座標の変更時はflipの値を変えて向きを変更
  if(i.left.pressed) {
  
    player.x -= player.speed;
    player.flip = 1;
    
  } else if(i.right.pressed) {
  
    player.x += player.speed;
    player.flip = 0;
    
  }
  
  if(i.down.pressed) {
    player.y -= player.speed;
  } else if(i.up.pressed) {
    player.y += player.speed;
  }
    
  //キャラクターの表示
  engine.screen.drawTile(1,player.x,player.y,player.flip);
  
}

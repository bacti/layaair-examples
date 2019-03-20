import { GameInfoUI } from './ui/layaUI.max.all'

export class GameInfo extends GameInfoUI {
    private gameInstance
    constructor(gameInstance) {
        super();
        this.gameInstance = gameInstance
        //注册按钮点击事件，点击后暂停游戏
        this.pauseBtn.on("click", this, this.onPauseBtnClick);
        //初始化UI显示
        this.reset();
    }

    public reset(): void {
        this.infoLabel.text = "";
        this.hp(5);
        this.level(0);
        this.score(0);
    }

    onPauseBtnClick(e: Laya.Event): void {
        //阻止事件冒泡
        e.stopPropagation();
        //暂停游戏
        this.infoLabel.text = "游戏已暂停，任意地方恢复游戏";
        this.gameInstance.pause();
        Laya.stage.once("click", this, this.onStageClick)
    }

    onStageClick(e: Laya.Event): void {
        this.infoLabel.text = "";
        this.gameInstance.resume();
    }

    //显示血量
    public hp(value: number): void {
        this.hpLabel.text = "HP:" + value;
    }

    //显示关卡级别
    public level(value: number): void {
        this.levelLabel.text = "Level:" + value;
    }

    //显示积分
    public score(value: number): void {
        this.scoreLabel.text = "Score:" + value;
    }
}
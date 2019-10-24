import Image from '../scripts/images';
import Const from '../scripts/constants';
import Util from '../scripts/utils';

export default class TitleScene extends Phaser.Scene {
    constructor() {
        super({key: 'TitleScene'});
    }

    preload() {
        this.load.image('background', Image.background);
        this.load.image('logo', Image.logo);
        this.load.image('btn-play', Image.btnPlay);
        this.load.image('btn-sfx', Image.btnSfx);
        this.load.image('big-shadow', Image.bigShadow);
        this.load.image('donut', Image.donut);
    }

    create() {
        const SCREEN_WIDTH = this.game.scale.gameSize._width;
        const SCREEN_HEIGHT = this.game.scale.gameSize._height;

        const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
        bg.displayWidth = window.innerWidth;
        bg.displayHeight = window.innerHeight;

        const logo = this.add.image(null, SCREEN_HEIGHT * Const.TITLE.LOGO_PAD_Y, 'logo')
            .setOrigin(0, 0).setScale(Const.TITLE.SCALE.LOGO);
        logo.x = SCREEN_WIDTH / 2 - logo.width * Const.TITLE.SCALE.LOGO / 2;
        const logoOffsetY = logo.height * Const.TITLE.SCALE.LOGO + logo.y
        
        const donutShadow = this.add.image(null, logoOffsetY + 20, 'big-shadow')
            .setOrigin(0, 0).setScale(Const.TITLE.SCALE.DONUT);
        donutShadow.x = SCREEN_WIDTH / 2 - donutShadow.width * Const.TITLE.SCALE.DONUT / 2;

        this.add.image(donutShadow.x, donutShadow.y, 'donut')
            .setOrigin(0, 0).setScale(Const.TITLE.SCALE.DONUT);
        const play = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT - 350, 'btn-play').setScale(Const.TITLE.SCALE.PLAY);

        Activate().activatePlayBtn(play);
        
        const sfx = this.add.image(SCREEN_WIDTH - 130, SCREEN_HEIGHT - 135, 'btn-sfx')
            .setOrigin(0, 0).setScale(Const.TITLE.SCALE.SFX);

        const tutorial = Util.createText(this, null, SCREEN_HEIGHT - 125, 'HOW TO PLAY', Const.FONT, '80px');
        tutorial.x = SCREEN_WIDTH / 2 - tutorial.width / 2;

        Activate().gotoTutorial(tutorial, this);
    }
}

export function Activate() {
    return {
        activatePlayBtn(btn) {
            btn.setInteractive().on('pointerdown', function() {
                this.setScale(Const.TITLE.SCALE.PLAY * 1.075);
            });
            btn.setInteractive().on('pointerup', function() {
                console.log('start game');
                this.setScale(Const.TITLE.SCALE.PLAY);
            });
        },
        gotoTutorial(elem, game) {
            elem.setInteractive().on('pointerdown', function() {
                this.setScale(1.05);
            });
            elem.setInteractive().on('pointerup', function() {
                this.setScale(1);
                game.scene.start('TutorialScene');
            });
        }
    }
}
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("level1");

		/* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("boot", "assets/boot.json");
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = new BackgroundClass(this);
		this.add.existing(background);

		// layer_1
		const layer_1 = this.add.layer();

		// back_TileSet_12
		const back_TileSet_12 = this.add.image(768, 272, "Back_TileSet_12");
		layer_1.add(back_TileSet_12);

		// back_TileSet_13
		const back_TileSet_13 = this.add.image(640, 272, "Back_TileSet_13");
		layer_1.add(back_TileSet_13);

		// back_TileSet_08
		const back_TileSet_08 = this.add.image(768, 240, "Back_TileSet_08");
		layer_1.add(back_TileSet_08);

		// back_TileSet_09
		const back_TileSet_09 = this.add.image(640, 240, "Back_TileSet_09");
		layer_1.add(back_TileSet_09);

		// back_TileSet_06
		const back_TileSet_06 = this.add.image(672, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_06);

		// back_TileSet
		const back_TileSet = this.add.image(672, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet);

		// back_TileSet_1
		const back_TileSet_1 = this.add.image(704, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_1);

		// back_TileSet_2
		const back_TileSet_2 = this.add.image(736, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_2);

		// back_TileSet_3
		const back_TileSet_3 = this.add.image(704, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_3);

		// back_TileSet_4
		const back_TileSet_4 = this.add.image(736, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_4);

		// back_TileSet_01
		const back_TileSet_01 = this.add.image(2624, 216, "Back_TileSet_01");
		layer_1.add(back_TileSet_01);

		// back_TileSet_5
		const back_TileSet_5 = this.add.image(2624, 184, "Back_TileSet_13");
		layer_1.add(back_TileSet_5);

		// back_TileSet_05
		const back_TileSet_05 = this.add.image(2624, 152, "Back_TileSet_05");
		layer_1.add(back_TileSet_05);

		// back_TileSet_6
		const back_TileSet_6 = this.add.image(2656, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_6);

		// back_TileSet_7
		const back_TileSet_7 = this.add.image(2656, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_7);

		// back_TileSet_8
		const back_TileSet_8 = this.add.image(2656, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_8);

		// back_TileSet_9
		const back_TileSet_9 = this.add.image(2656, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_9);

		// back_TileSet_10
		const back_TileSet_10 = this.add.image(2656, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_10);

		// back_TileSet_11
		const back_TileSet_11 = this.add.image(2688, 152, "Back_TileSet_06");
		layer_1.add(back_TileSet_11);

		// back_TileSet_14
		const back_TileSet_14 = this.add.image(2688, 184, "Back_TileSet_06");
		layer_1.add(back_TileSet_14);

		// back_TileSet_15
		const back_TileSet_15 = this.add.image(2688, 216, "Back_TileSet_06");
		layer_1.add(back_TileSet_15);

		// back_TileSet_16
		const back_TileSet_16 = this.add.image(2688, 248, "Back_TileSet_06");
		layer_1.add(back_TileSet_16);

		// back_TileSet_17
		const back_TileSet_17 = this.add.image(2688, 280, "Back_TileSet_06");
		layer_1.add(back_TileSet_17);

		// back_TileSet_18
		const back_TileSet_18 = this.add.image(2720, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_18);

		// back_TileSet_19
		const back_TileSet_19 = this.add.image(2720, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_19);

		// back_TileSet_20
		const back_TileSet_20 = this.add.image(2720, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_20);

		// back_TileSet_21
		const back_TileSet_21 = this.add.image(2720, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_21);

		// back_TileSet_22
		const back_TileSet_22 = this.add.image(2720, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_22);

		// back_TileSet_23
		const back_TileSet_23 = this.add.image(2752, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_23);

		// back_TileSet_24
		const back_TileSet_24 = this.add.image(2752, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_24);

		// back_TileSet_25
		const back_TileSet_25 = this.add.image(2752, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_25);

		// back_TileSet_26
		const back_TileSet_26 = this.add.image(2752, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_26);

		// back_TileSet_27
		const back_TileSet_27 = this.add.image(2752, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_27);

		// back_TileSet_28
		const back_TileSet_28 = this.add.image(2784, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_28);

		// back_TileSet_29
		const back_TileSet_29 = this.add.image(2784, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_29);

		// back_TileSet_30
		const back_TileSet_30 = this.add.image(2784, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_30);

		// back_TileSet_31
		const back_TileSet_31 = this.add.image(2784, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_31);

		// back_TileSet_32
		const back_TileSet_32 = this.add.image(2784, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_32);

		// back_TileSet_33
		const back_TileSet_33 = this.add.image(2816, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_33);

		// back_TileSet_34
		const back_TileSet_34 = this.add.image(2816, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_34);

		// back_TileSet_35
		const back_TileSet_35 = this.add.image(2816, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_35);

		// back_TileSet_36
		const back_TileSet_36 = this.add.image(2816, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_36);

		// back_TileSet_37
		const back_TileSet_37 = this.add.image(2816, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_37);

		// back_TileSet_38
		const back_TileSet_38 = this.add.image(2848, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_38);

		// back_TileSet_39
		const back_TileSet_39 = this.add.image(2848, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_39);

		// back_TileSet_40
		const back_TileSet_40 = this.add.image(2848, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_40);

		// back_TileSet_41
		const back_TileSet_41 = this.add.image(2848, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_41);

		// back_TileSet_42
		const back_TileSet_42 = this.add.image(2848, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_42);

		// back_TileSet_43
		const back_TileSet_43 = this.add.image(2880, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_43);

		// back_TileSet_44
		const back_TileSet_44 = this.add.image(2880, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_44);

		// back_TileSet_45
		const back_TileSet_45 = this.add.image(2880, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_45);

		// back_TileSet_46
		const back_TileSet_46 = this.add.image(2880, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_46);

		// back_TileSet_47
		const back_TileSet_47 = this.add.image(2880, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_47);

		// back_TileSet_48
		const back_TileSet_48 = this.add.image(2912, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_48);

		// back_TileSet_49
		const back_TileSet_49 = this.add.image(2912, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_49);

		// back_TileSet_50
		const back_TileSet_50 = this.add.image(2912, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_50);

		// back_TileSet_51
		const back_TileSet_51 = this.add.image(2912, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_51);

		// back_TileSet_52
		const back_TileSet_52 = this.add.image(2912, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_52);

		// back_TileSet_53
		const back_TileSet_53 = this.add.image(2944, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_53);

		// back_TileSet_54
		const back_TileSet_54 = this.add.image(2944, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_54);

		// back_TileSet_55
		const back_TileSet_55 = this.add.image(2944, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_55);

		// back_TileSet_56
		const back_TileSet_56 = this.add.image(2944, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_56);

		// back_TileSet_57
		const back_TileSet_57 = this.add.image(2944, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_57);

		// back_TileSet_58
		const back_TileSet_58 = this.add.image(2976, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_58);

		// back_TileSet_59
		const back_TileSet_59 = this.add.image(2976, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_59);

		// back_TileSet_60
		const back_TileSet_60 = this.add.image(2976, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_60);

		// back_TileSet_61
		const back_TileSet_61 = this.add.image(2976, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_61);

		// back_TileSet_62
		const back_TileSet_62 = this.add.image(2976, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_62);

		// back_TileSet_63
		const back_TileSet_63 = this.add.image(3008, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_63);

		// back_TileSet_64
		const back_TileSet_64 = this.add.image(3008, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_64);

		// back_TileSet_65
		const back_TileSet_65 = this.add.image(3008, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_65);

		// back_TileSet_66
		const back_TileSet_66 = this.add.image(3008, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_66);

		// back_TileSet_67
		const back_TileSet_67 = this.add.image(3008, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_67);

		// back_TileSet_68
		const back_TileSet_68 = this.add.image(3040, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_68);

		// back_TileSet_69
		const back_TileSet_69 = this.add.image(3040, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_69);

		// back_TileSet_70
		const back_TileSet_70 = this.add.image(3040, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_70);

		// back_TileSet_71
		const back_TileSet_71 = this.add.image(3040, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_71);

		// back_TileSet_72
		const back_TileSet_72 = this.add.image(3040, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_72);

		// back_TileSet_73
		const back_TileSet_73 = this.add.image(3072, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_73);

		// back_TileSet_74
		const back_TileSet_74 = this.add.image(3072, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_74);

		// back_TileSet_75
		const back_TileSet_75 = this.add.image(3072, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_75);

		// back_TileSet_76
		const back_TileSet_76 = this.add.image(3072, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_76);

		// back_TileSet_77
		const back_TileSet_77 = this.add.image(3072, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_77);

		// back_TileSet_78
		const back_TileSet_78 = this.add.image(3104, 144, "Back_TileSet_06");
		layer_1.add(back_TileSet_78);

		// back_TileSet_79
		const back_TileSet_79 = this.add.image(3104, 176, "Back_TileSet_06");
		layer_1.add(back_TileSet_79);

		// back_TileSet_80
		const back_TileSet_80 = this.add.image(3104, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_80);

		// back_TileSet_81
		const back_TileSet_81 = this.add.image(3104, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_81);

		// back_TileSet_82
		const back_TileSet_82 = this.add.image(3104, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_82);

		// back_TileSet_83
		const back_TileSet_83 = this.add.image(2840, 208, "Back_TileSet_06");
		layer_1.add(back_TileSet_83);

		// back_TileSet_84
		const back_TileSet_84 = this.add.image(2840, 240, "Back_TileSet_06");
		layer_1.add(back_TileSet_84);

		// back_TileSet_85
		const back_TileSet_85 = this.add.image(2840, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_85);

		// back_TileSet_86
		const back_TileSet_86 = this.add.image(2840, 304, "Back_TileSet_06");
		layer_1.add(back_TileSet_86);

		// back_TileSet_87
		const back_TileSet_87 = this.add.image(2840, 336, "Back_TileSet_06");
		layer_1.add(back_TileSet_87);

		// back_TileSet_90
		const back_TileSet_90 = this.add.image(2808, 304, "Back_TileSet_06");
		layer_1.add(back_TileSet_90);

		// back_TileSet_91
		const back_TileSet_91 = this.add.image(2776, 304, "Back_TileSet_06");
		layer_1.add(back_TileSet_91);

		// back_TileSet_92
		const back_TileSet_92 = this.add.image(2744, 304, "Back_TileSet_06");
		layer_1.add(back_TileSet_92);

		// back_TileSet_04
		const back_TileSet_04 = this.add.image(3168, 272, "Back_TileSet_04");
		layer_1.add(back_TileSet_04);

		// back_TileSet_93
		const back_TileSet_93 = this.add.image(3136, 240, "Back_TileSet_08");
		layer_1.add(back_TileSet_93);

		// back_TileSet_94
		const back_TileSet_94 = this.add.image(3136, 208, "Back_TileSet_12");
		layer_1.add(back_TileSet_94);

		// back_TileSet_88
		const back_TileSet_88 = this.add.image(2872, 304, "Back_TileSet_06");
		layer_1.add(back_TileSet_88);

		// back_TileSet_89
		const back_TileSet_89 = this.add.image(2904, 304, "Back_TileSet_06");
		layer_1.add(back_TileSet_89);

		// back_TileSet_95
		const back_TileSet_95 = this.add.image(3136, 176, "Back_TileSet_08");
		layer_1.add(back_TileSet_95);

		// back_TileSet_96
		const back_TileSet_96 = this.add.image(3136, 272, "Back_TileSet_06");
		layer_1.add(back_TileSet_96);

		// back_TileSet_97
		const back_TileSet_97 = this.add.image(3136, 144, "Back_TileSet_04");
		layer_1.add(back_TileSet_97);

		// back_TileSet_98
		const back_TileSet_98 = this.add.image(2624, 248, "Back_TileSet_09");
		layer_1.add(back_TileSet_98);

		// back_TileSet_99
		const back_TileSet_99 = this.add.image(2624, 280, "Back_TileSet_13");
		layer_1.add(back_TileSet_99);

		// box3
		const box3 = this.add.image(16, 272, "Box3");
		layer_1.add(box3);

		// box
		const box = this.add.image(40, 272, "Box3");
		layer_1.add(box);

		// box2
		const box2 = this.add.image(64, 272, "Box2");
		layer_1.add(box2);

		// barrel1
		const barrel1 = this.add.image(16, 248, "Barrel1");
		layer_1.add(barrel1);

		// barrel
		const barrel = this.add.image(32, 248, "Barrel1");
		layer_1.add(barrel);

		// tree2
		const tree2 = this.add.image(304, 240, "Tree2");
		layer_1.add(tree2);

		// rock_Big2
		const rock_Big2 = this.add.image(248, 272, "Rock_Big2");
		layer_1.add(rock_Big2);

		// box4
		const box4 = this.add.image(16, 224, "Box4");
		layer_1.add(box4);

		// tree1
		const tree1 = this.add.image(936, 240, "Tree1");
		layer_1.add(tree1);

		// tree4
		const tree4 = this.add.image(1128, 240, "Tree4");
		layer_1.add(tree4);

		// rock_Small3
		const rock_Small3 = this.add.image(1040, 272, "Rock_Small3");
		layer_1.add(rock_Small3);

		// tree
		const tree = this.add.image(1561, 240, "Tree4");
		layer_1.add(tree);

		// tree3
		const tree3 = this.add.image(2128, 256, "Tree3");
		layer_1.add(tree3);

		// tree_1
		const tree_1 = this.add.image(1800, 256, "Tree3");
		layer_1.add(tree_1);

		// rock_Big3
		const rock_Big3 = this.add.image(1632, 272, "Rock_Big3");
		layer_1.add(rock_Big3);

		// rock_Big1
		const rock_Big1 = this.add.image(1752, 272, "Rock_Big1");
		layer_1.add(rock_Big1);

		// rock_Big
		const rock_Big = this.add.image(2320, 272, "Rock_Big3");
		layer_1.add(rock_Big);

		// tree_2
		const tree_2 = this.add.image(1952, 240, "Tree2");
		layer_1.add(tree_2);

		// tree_3
		const tree_3 = this.add.image(3376, 256, "Tree3");
		layer_1.add(tree_3);

		// rock_Small4
		const rock_Small4 = this.add.image(3504, 272, "Rock_Small4");
		layer_1.add(rock_Small4);

		// schild6
		const schild6 = this.add.image(3952, 144, "1_2");
		layer_1.add(schild6);

		// schild5
		const schild5 = this.add.image(2248, 272, "3_1");
		layer_1.add(schild5);

		// schild4
		const schild4 = this.add.image(2384, 272, "4_1");
		layer_1.add(schild4);

		// schild3
		const schild3 = this.add.image(2736, 272, "1_1");
		layer_1.add(schild3);

		// schild2
		const schild2 = this.add.image(1312, 272, "1_2");
		layer_1.add(schild2);

		// schild1
		const schild1 = this.add.image(528, 272, "3_2");
		layer_1.add(schild1);

		// GroundLayer
		const groundLayer = new GroundLayer(this);
		this.add.existing(groundLayer);

		// Player
		const player = new Player(this, 128, 224);
		this.add.existing(player);

		// healthBar
		const healthBar = this.add.sprite(56, 16, "Healthbar_sprite", 3);

		// stoneBar
		const stoneBar = this.add.sprite(56, 32, "Energybar_sprite", 0);

		// coinBar
		const coinBar = this.add.image(56, 48, "coinBar", 0);

		// spikes
		const spikes = new Spikes(this, 1360, 304);
		this.add.existing(spikes);

		// spikes_1
		const spikes_1 = new Spikes(this, 1392, 304);
		this.add.existing(spikes_1);

		// spikes_2
		const spikes_2 = new Spikes(this, 2768, 304);
		this.add.existing(spikes_2);

		// spikes_3
		const spikes_3 = new Spikes(this, 2800, 304);
		this.add.existing(spikes_3);

		// spikes_4
		const spikes_4 = new Spikes(this, 2832, 304);
		this.add.existing(spikes_4);

		// spikes_5
		const spikes_5 = new Spikes(this, 2864, 304);
		this.add.existing(spikes_5);

		// bear
		const bear = new Bear(this, 720, 184);
		this.add.existing(bear);

		// bear_1
		const bear_1 = new Bear(this, 1320, 264);
		this.add.existing(bear_1);

		// rockItem
		const rockItem = new RockItem(this, 416, 272);
		this.add.existing(rockItem);

		// rockItem_1
		const rockItem_1 = new RockItem(this, 1000, 280);
		this.add.existing(rockItem_1);

		// burger
		const burger = new Burger(this, 1440, 272);
		this.add.existing(burger);

		// rockItem_2
		const rockItem_2 = new RockItem(this, 1520, 280);
		this.add.existing(rockItem_2);

		// rockItem_3
		const rockItem_3 = new RockItem(this, 1880, 280);
		this.add.existing(rockItem_3);

		// bear_2
		const bear_2 = new Bear(this, 1104, 264);
		this.add.existing(bear_2);

		// bear_3
		const bear_3 = new Bear(this, 2184, 264);
		this.add.existing(bear_3);

		// bear_4
		const bear_4 = new Bear(this, 1992, 264);
		this.add.existing(bear_4);

		// bear_5
		const bear_5 = new Bear(this, 1704, 264);
		this.add.existing(bear_5);

		// bear_6
		const bear_6 = new Bear(this, 3128, 88);
		this.add.existing(bear_6);

		// bear_7
		const bear_7 = new Bear(this, 3752, 264);
		this.add.existing(bear_7);

		// bear_8
		const bear_8 = new Bear(this, 3344, 264);
		this.add.existing(bear_8);

		// coin
		const coin = new Coin(this, 2696, 272);
		this.add.existing(coin);

		// coin_1
		const coin_1 = new Coin(this, 704, 192);
		this.add.existing(coin_1);

		// coin_2
		const coin_2 = new Coin(this, 2872, 88);
		this.add.existing(coin_2);

		// burger_1
		const burger_1 = new Burger(this, 3016, 88);
		this.add.existing(burger_1);

		// rockItem_4
		const rockItem_4 = new RockItem(this, 2928, 272);
		this.add.existing(rockItem_4);

		// burger_2
		const burger_2 = new Burger(this, 2984, 272);
		this.add.existing(burger_2);

		// rockItem_5
		const rockItem_5 = new RockItem(this, 3584, 272);
		this.add.existing(rockItem_5);

		// burger_3
		const burger_3 = new Burger(this, 3920, 144);
		this.add.existing(burger_3);

		// enemyStop2
		const enemyStop2 = new EnemyStop(this, 608, 192);
		this.add.existing(enemyStop2);

		// enemyStop1
		const enemyStop1 = new EnemyStop(this, 800, 192);
		this.add.existing(enemyStop1);

		// enemyStop
		const enemyStop = new EnemyStop(this, 16, 272);
		this.add.existing(enemyStop);

		// enemyStop_1
		const enemyStop_1 = new EnemyStop(this, 1360, 272);
		this.add.existing(enemyStop_1);

		// enemyStop_2
		const enemyStop_2 = new EnemyStop(this, 1392, 272);
		this.add.existing(enemyStop_2);

		// enemyStop_3
		const enemyStop_3 = new EnemyStop(this, 2592, 96);
		this.add.existing(enemyStop_3);

		// enemyStop_4
		const enemyStop_4 = new EnemyStop(this, 3168, 96);
		this.add.existing(enemyStop_4);

		// enemyStop_5
		const enemyStop_5 = new EnemyStop(this, 2864, 272);
		this.add.existing(enemyStop_5);

		// enemyStop_6
		const enemyStop_6 = new EnemyStop(this, 2768, 272);
		this.add.existing(enemyStop_6);

		// enemyStop_7
		const enemyStop_7 = new EnemyStop(this, 3824, 272);
		this.add.existing(enemyStop_7);

		this.background = background;
		this.groundLayer = groundLayer;
		this.player = player;
		this.healthBar = healthBar;
		this.stoneBar = stoneBar;
		this.coinBar = coinBar;

		this.events.emit("scene-awake");
	}

	/** @type {BackgroundClass} */
	background;
	/** @type {GroundLayer} */
	groundLayer;
	/** @type {Player} */
	player;
	/** @type {Phaser.GameObjects.Sprite} */
	healthBar;
	/** @type {Phaser.GameObjects.Sprite} */
	stoneBar;
	/** @type {Phaser.GameObjects.Image} */
	coinBar;

	/* START-USER-CODE */

    // Write your code here

    init() {
        this.loadGroups();
    }

    create() {
        this.editorCreate();
        this.createCollisions();

        this.healthBar.setScrollFactor(0, 0);
        this.stoneBar.setScrollFactor(0, 0);
        this.coinBar.setScrollFactor(0, 0);
        this.physics.world.setBounds(0, 0, 4672, game.config.height);
    }

    update() {
        this.player.update();
        this.background.update();
    }

    loadGroups() {
        this.stones = new Phaser.Physics.Arcade.Group(this.physics.world, this);
        this.enemies = new Phaser.Physics.Arcade.Group(
            this.physics.world,
            this
        );
        this.thrownStones = new Phaser.Physics.Arcade.Group(
            this.physics.world,
            this
        );
        this.coins = new Phaser.Physics.Arcade.Group(this.physics.world, this);
        this.burger = new Phaser.Physics.Arcade.Group(this.physics.world, this);
        this.spikes = new Phaser.Physics.Arcade.StaticGroup(
            this.physics.world,
            this
		);
		this.enemyStop = new Phaser.Physics.Arcade.StaticGroup(this.physics.world, this)
    }

    stoneItemAndCharacterCollision() {
        return (character, rockItem) => {
            const canCollectStone = character.stones < character.maxStone;
            if (canCollectStone) {
                character.collectStone();
                rockItem.destroy();
            }
        };
    }

    coinAndPlayerCollision() {
        return (character, coin) => {
            const canCollectStone = character.coins < character.maxCoins;
            if (canCollectStone) {
                character.collectCoin();
                coin.destroy();
            }
        };
    }

    burgerAndPlayerCollision() {
        return (character, burger) => {
            const canCollectBurger =
                character.lifePoints < character.maxLifePoints;
            if (canCollectBurger) {
                character.collectBurger();
                burger.destroy();
            }
        };
    }

    rockAndEnemyCollision() {
        return (thrownObject, enemy) => {
            thrownObject.destroy();
            enemy.gotHit(thrownObject.damage, ANIM_BEARHURT, ANIM_BEARDEATH);
            enemy.setVelocityX(0);
        };
    }

    characterAndEnemyCollision() {
        return (character, enemy) => {
            let enemyGotHitOnTop = enemy.body.touching.up;
            if (enemyGotHitOnTop) {
                enemy.gotHit(character.damage, ANIM_BEARHURT, ANIM_BEARDEATH);
                character.isJumped = false;
                character.jump(character.jumpSpeed, ANIM_JUMPDUDE);
            } else {
                character.gotHit(
                    enemy.damage,
                    ANIM_HURTDUDE,
                    ANIM_DEATHDUDE,
                    (character) => {
                        character.setVelocityX(character.knockback);
                        this.healthBar.setFrame(character.lifePoints);
                    }
                );
            }
        };
    }

    createCollisions() {
        const collisionList = loadCollisionObjects(this);
        collisionList.forEach((collisionObject) => {
            if (collisionObject.overlap) {
                this.physics.add.overlap(
                    collisionObject.firstObject,
                    collisionObject.secondObject,
                    collisionObject.function
                );
            } else {
                this.physics.add.collider(
                    collisionObject.firstObject,
                    collisionObject.secondObject,
                    collisionObject.function
                );
            }
        });
    }

    playerSpikesCollision() {
        return (player) => {
            player.gotHit(1, ANIM_HURTDUDE, ANIM_DEATHDUDE, (player) => {
                player.setVelocity(player.knockback * 2, player.knockback * 2);
                this.healthBar.setFrame(player.lifePoints);
            });
        };
	}

	enemyStopCollision() {
		return (enemy) => {
			enemy.speed = enemy.speed * -1;
			enemy.move(enemy.speed, ANIM_BEARWALK, !enemy.flipX);
		}
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

set names utf8;
drop database  if exists DeGame;
create database DeGame charset=utf8;
use DeGame;
create table game_video(
	vid INT PRIMARY KEY AUTO_INCREMENT,
	vic VARCHAR(32),
	vic_sm VARCHAR(32),
	gid INT
);
insert into game_video values(
	null,
	'mafia1.webm',
	'mafia_video1.jpg',
	'1'
);
insert into game_video values(
	null,
	'mafia2.webm',
	'mafia_video2.jpg',
	'1'
);
insert into game_video values(
	null,
	'mafia3.webm',
	'mafia_video3.jpg',
	'1'
);
create table game_imgs(
	iid INT PRIMARY KEY AUTO_INCREMENT,
	gic_sm VARCHAR(32),
	gic_lg VARCHAR(32),
	gid INT
);
insert into game_imgs values(
	null,
	'mafia_sm1.jpg',
	'mafia_lg1.jpg',
	'1'
);
insert into game_imgs values(
	null,
	'mafia_sm2.jpg',
	'mafia_lg2.jpg',
	'1'
);
insert into game_imgs values(
	null,
	'mafia_sm3.jpg',
	'mafia_lg3.jpg',
	'1'
);
insert into game_imgs values(
	null,
	'mafia_sm4.jpg',
	'mafia_lg4.jpg',
	'1'
);
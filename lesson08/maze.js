$(document).ready(function () {
	"use strict";
	let playing = false;

	const defaultStatus = "Click the \"S\" to begin.";
	const lostStatus = "Sorry, you lost :[";
	const wintStatus = "You win! :]";

	function start_mousedown() {
		$(".boundary").removeClass('youlose');
		$("#status").text(defaultStatus);

		playing = true;
	}

	function boundary_mouseenter() {
		if (!playing) {
			return;
		}
		lose();
	}

	// function handleMouseout(evt) {
	// 	$(".boundary").removeClass('youlose');
	// 	$(".boundary").addClass('boundary');
	// }

	function end_mouseenter() {
		if (!playing) {
			return;
		}
		$("#status").text(wintStatus);

		playing = false;
	}

	function maze_mouseleave() {
		if (!playing) {
			return;
		}
		lose();
	}

	function lose() {
		$(".boundary").addClass('youlose');
		$("#status").text(lostStatus);

		playing = false;
	}

	$("#start").on("mousedown", start_mousedown);
	$(".boundary").on("mouseenter", boundary_mouseenter);
	// $(".boundary").on("mouseout", handleMouseout);
	$("#end").on("mouseenter", end_mouseenter);
	$("#maze").on("mouseleave", maze_mouseleave);
});
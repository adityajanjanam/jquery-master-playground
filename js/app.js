// =======================
// MAIN jQuery ($) — SAFE SCOPE
// =======================
jQuery(function ($) {

    // 1. Basics
    $("#basicBtn").on("click", function () {
        $(".basic-text").text("Text changed using jQuery!");
    });

    // 2. Events
    $("#eventInput").on("keyup", function () {
        $("#eventOutput").text($(this).val());
    });

    // 3. Effects
    $("#hideBtn").on("click", () => $("#box").hide());
    $("#showBtn").on("click", () => $("#box").show());
    $("#fadeBtn").on("click", () => $("#box").fadeToggle());
    $("#slideBtn").on("click", () => $("#box").slideToggle());

    $("#animateBtn").on("click", function () {
        $("#box")
            .stop(true)
            .css({ position: "relative", left: 0 })
            .animate({ left: "200px" }, 800)
            .animate({ left: "0px" }, 800);
    });

    $("#stopBtn").on("click", function () {
        $("#box").stop(true);
    });

    // 4. HTML
    $("#addItem").on("click", function () {
        const val = $("#itemInput").val().trim();
        if (!val) return alert("Enter an item");

        $("#itemList").append(`<li>${val}</li>`);
        $("#itemInput").val("");
    });

    $("#removeItem").on("click", function () {
        $("#itemList li:last").remove();
    });

    // 5. CSS
    $("#themeBtn").on("click", function () {
        $("body").toggleClass("dark");
    });

    // 6. Dimensions
    $("#dimensionBtn").on("click", function () {
        $("#dimensionOutput").text(
            `Width: ${$("#box").width()}px, Height: ${$("#box").height()}px`
        );
    });

    // 7. Traversing
    $("#traverseBtn").on("click", function () {
        $("#traverseList li.active")
            .siblings()
            .css("background", "#ddd");
    });

    // 8. AJAX
    $("#loadUsers").on("click", function () {
        fetch("data/users.json")
            .then(res => res.json())
            .then(data => {
                $("#ajaxData").text(JSON.stringify(data, null, 2));
            })
            .catch(() => {
                $("#ajaxData").text("❌ Failed to load JSON");
            });
    });

});


// =======================
// 9. noConflict (SAFE & ISOLATED)
// =======================
var jq = jQuery.noConflict();

jq(function () {
    jq("#noConflictBtn").on("click", function () {
        jq("#filterList li:even").css("background", "yellow");
    });
});

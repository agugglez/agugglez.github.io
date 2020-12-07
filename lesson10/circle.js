$(document).ready(function () {
    // 2. Make the circle grow by 10px every 250ms.
    let internvalId = 0;

    function drawCircle(radius) {
        let $circle = $("<div>").addClass("dot");
        $("#canvas").append($circle);
        $circle.height(radius);
        $circle.width(radius);

        return $circle;
    }
    function growBy($elem, amount) {
        let size = $elem.height() + amount;
        $elem.height(size);
        $elem.width(size);
    }

    $("#start").click(function (evt) {
        let width = parseInt($("#width").val());
        let growthAmount = parseInt($("#growthAmount").val());
        let growthRate = parseInt($("#growRate").val());
        let circleCount = parseInt($("#circleCount").val());

        for (let i = 0; i < circleCount; i++) {
            // show the new circle
            let $circle = drawCircle(width);
            // 3. Remove the circle when you click on it.
            $circle.click(function (evt) {
                clearInterval(internvalId);
                $circle.hide();
            });
            // attach interval
            let internvalId = setInterval(growBy, growthRate, $circle, growthAmount);
        }
    });
});
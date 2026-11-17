$.getJSON("data.json", function (spots) {
    $.each(spots, function (i, spot) {
        const [lat, lng] = spot.location;
        const url = `https://www.google.com/maps?q=${lat},${lng}` ;

        const $row = $("<tr>")
        .append($("<td>").text(spot.name))
        .append($("<td>").text(spot.description))
        .append(
            $("<td>").append(
                $("<a>")
                .attr({ href: url, target: "_blank", rel: "noopener"})
                .text("Open Map")
            )
        );
        $("tbody").append($row); 
    });
    });
$(function () {
    $('#search-form').on('submit', function () {
        event.preventDefault();

        var newSearch = {
            location: $('#hotel_location').val()
                .trim(),
            checkIn: $('#check_in').val()
                .trim(),
            checkOut: $('#check_out').val()
                .trim()

        };
        console.log(newSearch);


        var URL =
            '/search/' +
            newSearch.location +
            '/' +
            newSearch.checkIn +
            '/' +
            newSearch.checkOut;

        window.location.href = URL;
    });


    $('#book_room').on('submit', function () {
        event.preventDefault();

        var newbookedRoom = {
            refNumber: $("ref_Number").val(),
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            dateOfBirth: $('#date_of_birth').val().trim(),
            phoneNumber: $('#tel-input').val().trim(),
            email: $('#email').val().trim(),
            hotelID: $("#hotelID").val()


        };
        console.log(newbookedRoom);


        $.ajax('/api/bookedRoom', {
            type: "POST",
            data: newbookedRoom
        }).then(
            function () {
                console.log("created new booked room");
                // Reload the page to get the updated list
                // location.reload();
            }
        );
        $('.myHotel').on('submit', function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            var myHotel = {
                firstName: $('#firstName')
                    .val()
                    .trim(),
                lastName: $('#lastName')
                    .val()
                    .trim(),
                email: $('#email')
                    .val()
                    .trim(),
                // dateOfbirth: $()
            };

            var URL =
                '/reservation/email/' +
                myHotel.email +
                '/firstName/' +
                myHotel.firstName +
                '/lastName/' +
                myHotel.lastName;
            window.location.href = URL;
        });

    });




});


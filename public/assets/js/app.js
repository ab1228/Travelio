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

    $(function () {
        $().on('submit', function () {
            var bookedRoom = {
                firstName: $('#firstName').val().trim(),
                lastName: $('#lastName').val().trim(),
                // dateOfBirth: $().val().trim(),
                phoneNumber: $('#tel-input').val().trim(),
                email: $('#email').val().trim()


            }
        })
    })


});



            $(document).ready(function () {
                var book = {};
                getAllBooks();
                $('#btnAddBook').click(function () {
                    book.title = $('#txtTitle').val();
                    book.author = $('#txtAuthor').val();
                    var bookObj = JSON.stringify(book);
                    alert("nuovo libro is:" + bookObj);
                    $.ajax({
                        url: 'http://localhost:8080/jQueryCrudBooks/rest/book',
                        method: 'POST',
                        data: bookObj,
                        contentType: "application/json; charset=utf-8",
                       
                        success: function () {
                            alert('Saved successfully');
                            getAllBooks();
                            reset();
                        },
                        error: function (error) {
                            alert(error);
                        }
                    })
                })
            })

            function getAllBooks() {
                $.ajax({
                    url: "http://localhost:8080/jQueryCrudBooks/rest/book",
                    method: "GET",
                    dataType: "json",
                    success: function (data) {
                        var tableBody = $('#tblBook tbody');
                        tableBody.empty();
                        $(data).each(function (index, element) {
                            tableBody.append('<tr><td>' + element.title + '</td><td>' + element.author + '</td><td><button onclick = "deleteBook(' + element.id + ')">Delete</button></td></tr>');
                        })
                    },
                    error: function (error) {
                        alert(error);
                    }
                })
            }

            function deleteBook(id) {
                $.ajax({
                    url: 'http://localhost:8080/jQueryCrudBooks/rest/book/' + id,
                    method: 'DELETE',
                    success: function () {
                        alert('record has been deleted');
                        getAllBooks();
                    },
                    error: function (error) {
                        alert(error);
                    }
                })
            }

            function reset() {
                $('#txtTitle').val('');
                $('#txtAuthor').val('');
            }
      
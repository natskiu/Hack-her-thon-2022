            function showForm() {
                var selopt = document.getElementById("opts").value;
                if (selopt == 1) {
                    document.getElementById("f1").style.display = "block";
                    document.getElementById("f2").style.display = "none";
                    document.getElementById("f3").style.display = "none";
                    document.getElementById("f4").style.display = "none";

                }
                if (selopt == 2) {
                    document.getElementById("f2").style.display = "block";
                    document.getElementById("f1").style.display = "none";
                    document.getElementById("f3").style.display = "none";
                    document.getElementById("f4").style.display = "none";
                }
                if (selopt == 3) {
                    document.getElementById("f3").style.display = "block";
                    document.getElementById("f1").style.display = "none";
                    document.getElementById("f2").style.display = "none";
                    document.getElementById("f4").style.display = "none";
                }
                if (selopt == 4) {
                    document.getElementById("f4").style.display = "block";
                    document.getElementById("f1").style.display = "none";
                    document.getElementById("f2").style.display = "none";
                    document.getElementById("f3").style.display = "none";
                }
                if (selopt == 0) {
                    document.getElementById("f2").style.display = "none";
                    document.getElementById("f1").style.display = "none";
                    document.getElementById("f3").style.display = "none";
                    document.getElementById("f4").style.display = "none";
                }
            }
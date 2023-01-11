var btn, btn_save, btn_dropdown, btn_2, btn_3;

btn = document.getElementById("info");
btn_save = document.getElementById("btn_save");
btn_dropdown = document.getElementById("btn_dropdown");
btn_2 = document.getElementById("btn_print");
btn_3 = document.getElementById("btn_print_2");

if(btn) {

  var info_plus;

  document.getElementById("btn_print").hidden = true;
  document.getElementById("btn_print_2").hidden = true;

  btn.addEventListener("click", function press() {

    if (info_plus != 0 && info_plus!=1) {
    
      info_plus = 0;

    }

    setSpecificSuccessFor(search, "<br>");

    var search_field, s, text, x_data, y_NaN_data, y_data, split_axes, r_data, u_data, year, max, more_years, year_2, min, more_years_2, ctx, chart;
    
    search_field = document.getElementById("search");
    s = search_field.value.trim();

    if (s.length == 0) {
      document.getElementById("details").innerHTML = "";
      document.getElementById("btn_print").hidden = true;
      return;
    } 
    else {
        /* Checking Which Browser */
        if (window.XMLHttpRequest) {

          var check = new XMLHttpRequest();

          /* Preventing Button Spam */
          document.getElementById("info").disabled = true;
          /* Keep Button hidden */
          document.getElementById("btn_print").hidden = true;

        }
        else {

          var check = new ActiveXObject("Microsoft.XMLHTTP");

          /* Preventing Button Spam */
          document.getElementById("info").disabled = true;
          /* Keep Button hidden */
          document.getElementById("btn_print").hidden = true;

        }

        check.onreadystatechange = function() {

          if (check.readyState == 4 && check.status == 200) {

            //console.log(check.responseText);

            text = check.responseText;
            text = text.split("\n");
            //console.log(text);

            let table_0 = document.createElement("table");
            table_0.classList.add('check_print_1');
            let thead_0 = document.createElement("thead");
            let table = document.createElement("table");
            table.classList.add('d-none', 'd-lg-table', 'check_print_2');
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            let table_1 = document.createElement("table");
            table_1.classList.add('d-md-table', 'd-lg-none');
            let thead_1 = document.createElement("thead");
            let tbody_1 = document.createElement("tbody");
            let table_2 = document.createElement("table");
            table_2.classList.add('check_print_4');
            let thead_2 = document.createElement("thead");
            let tbody_2 = document.createElement("tbody");
            let table_3 = document.createElement("table");
            table_3.classList.add('check_print_5');
            let thead_3 = document.createElement("thead");
            let table_4 = document.createElement("table");
            table_4.classList.add('check_print_6');
            let thead_4 = document.createElement("thead");
            let tbody_4 = document.createElement("tbody");
            let table_5 = document.createElement("table");
            table_5.classList.add('check_print_7');
            let thead_5 = document.createElement("thead");
            let tbody_5 = document.createElement("tbody");
            let table_6 = document.createElement("table");
            table_6.classList.add('check_print_8');
            let thead_6 = document.createElement("thead");
            let tbody_6 = document.createElement("tbody");

            table_0.appendChild(thead_0);
            table.appendChild(thead);
            table.appendChild(tbody);
            table_1.appendChild(thead_1);
            table_1.appendChild(tbody_1);
            table_2.appendChild(thead_2);
            table_2.appendChild(tbody_2);
            table_3.appendChild(thead_3);
            table_4.appendChild(thead_4);
            table_4.appendChild(tbody_4);
            table_5.appendChild(thead_5);
            table_5.appendChild(tbody_5);
            table_6.appendChild(thead_6);
            table_6.appendChild(tbody_6);

            var row_0 = document.createElement("tr");
            let heading_0 = document.createElement("th");
            heading_0.innerHTML = "CITATIONS";
            var row_1 = document.createElement("tr");
            let heading_1 = document.createElement("th");
            heading_1.innerHTML = "Year";
            var row_2 = document.createElement("tr");
            let heading_2 = document.createElement("th");
            heading_2.innerHTML = "Citations";
            var row_1_1 = document.createElement("td");
            let heading_1_1 = document.createElement("th");
            heading_1_1.innerHTML = "Year";
            var row_2_1 = document.createElement("td");
            let heading_2_1 = document.createElement("th");
            heading_2_1.innerHTML = "Citations";
            var row_3 = document.createElement("tr");
            let heading_3 = document.createElement("th");
            heading_3.innerHTML = "Sum of Citations";
            let heading_4 = document.createElement("th");
            heading_4.innerHTML = "Sum of Citations5";
            let heading_5 = document.createElement("th");
            heading_5.innerHTML = "h-index";
            let heading_6 = document.createElement("th");
            heading_6.innerHTML = "h-index5";
            var row_4 = document.createElement("tr");
            var row_5 = document.createElement("tr");
            let heading_7 = document.createElement("th");
            heading_7.innerHTML = "BEST YEAR - WORST YEAR - MEAN - STANDARD DEVIATION"
            var row_6 = document.createElement("tr");
            let heading_8 = document.createElement("th");
            heading_8.innerHTML = "";
            let heading_9 = document.createElement("th");
            heading_9.innerHTML = "Best Year";
            let heading_10 = document.createElement("th");
            heading_10.innerHTML = "Worst Year";
            var row_7 = document.createElement("tr");
            let heading_11 = document.createElement("th");
            heading_11.innerHTML = "Year";
            var row_8 = document.createElement("tr");
            let heading_12 = document.createElement("th");
            heading_12.innerHTML = "Citations";
            var row_9 = document.createElement("tr");
            let heading_13 = document.createElement("th");
            heading_13.innerHTML = "Mean";
            var row_10 = document.createElement("tr");
            var row_11 = document.createElement("tr");
            let heading_14 = document.createElement("th");
            heading_14.innerHTML = "Standard Deviation";
            var row_12 = document.createElement("tr");
            

            row_0.appendChild(heading_0);
            row_1.appendChild(heading_1);
            row_2.appendChild(heading_2);
            row_1_1.appendChild(heading_1_1);
            row_2_1.appendChild(heading_2_1);
            row_3.appendChild(heading_3);
            row_3.appendChild(heading_4);
            row_3.appendChild(heading_5);
            row_3.appendChild(heading_6);
            row_5.appendChild(heading_7);
            row_6.appendChild(heading_8);
            row_6.appendChild(heading_9);
            row_6.appendChild(heading_10);
            row_7.appendChild(heading_11);
            row_8.appendChild(heading_12);
            row_9.appendChild(heading_13);
            row_11.appendChild(heading_14);
            thead_0.appendChild(row_0);
            thead.appendChild(row_1);
            thead.appendChild(row_2);
            thead_1.appendChild(row_1_1);
            thead_1.appendChild(row_2_1);
            thead_2.appendChild(row_3);
            tbody_2.appendChild(row_4);
            thead_3.appendChild(row_5);
            thead_4.appendChild(row_6);
            thead_4.appendChild(row_7);
            thead_4.appendChild(row_8);
            thead_5.appendChild(row_9);
            tbody_5.appendChild(row_10);
            thead_6.appendChild(row_11);
            tbody_6.appendChild(row_12);

            document.getElementById("details").appendChild(table_0);
            document.getElementById("details").appendChild(table);
            document.getElementById("details").appendChild(table_1);
            document.getElementById("details").appendChild(table_2);
            document.getElementById("details").appendChild(table_3);
            document.getElementById("details").appendChild(table_4);
            document.getElementById("details").appendChild(table_5);
            document.getElementById("details").appendChild(table_6);

            x_NaN_data = new Array;
            x_data = new Array;
            y_NaN_data = new Array;
            y_data = new Array;
            r_data = new Array;
            var max_y_data = 0;
            var min_y_data = 1000;
            var year_max_y_data;
            var year_min_y_data;
            year = new Array;
            max = new Array;
            more_years = new Array;
            min = new Array;
            more_years_2 = new Array;
            year_2 = new Array;

              //document.getElementById("details").innerHTML = text.join("<br/>");
              let sum_row_10 = 0;
              let s_r_10 = 0;

              for (var i = 0; i < text.length - 5; i++) {
                
                split_axes = new Array;
                split_axes = text[i].split(":");
                x_NaN_data[i] = parseInt(split_axes[0]) || 0;
                y_NaN_data[i] = parseInt(split_axes[1]) || 0;

                if (x_NaN_data[i] != 0) {
                
                  x_data[i] = parseInt(split_axes[0]);
                  y_data[i] = parseInt(split_axes[1]);

                  if (max_y_data <= y_data[i]) {

                      max_y_data = y_data[i];
                      max[i] = max_y_data;
                      year_max_y_data = x_data[i];
                      year[i] = year_max_y_data;

                  }

                  if (min_y_data >= y_data[i]) {

                    min_y_data = y_data[i];
                    min[i] = min_y_data;
                    year_min_y_data = x_data[i];
                    year_2[i] = year_min_y_data;

                  }

                  let row_1_data_1 = document.createElement("td");
                  row_1_data_1.innerHTML = x_data[i];
                  let row_2_data_2 = document.createElement("td");
                  row_2_data_2.innerHTML = y_data[i];

                  let row_1_data_1_1 = document.createElement("tr");
                  row_1_data_1_1.innerHTML = x_data[i];
                  let row_2_data_2_1 = document.createElement("tr");
                  row_2_data_2_1.innerHTML = y_data[i];

                  row_1.appendChild(row_1_data_1);
                  row_2.appendChild(row_2_data_2);
                  tbody.appendChild(row_1);
                  tbody.appendChild(row_2);

                  row_1_1.appendChild(row_1_data_1_1);
                  row_2_1.appendChild(row_2_data_2_1);
                  tbody_1.appendChild(row_1_1);
                  tbody_1.appendChild(row_2_1);

                  sum_row_10 += y_data[i];
                  s_r_10 += 1;

                }

              }

              let mean = sum_row_10 / s_r_10;
              //console.log(mean);

              let mean_data_row_10 = document.createElement("td");
              mean_data_row_10.innerHTML = mean.toFixed(2);

              row_10.appendChild(mean_data_row_10);
              tbody_5.appendChild(row_10);

              var minus = new Array;
              let minus_var = 0;

              var minus_sqr = new Array;
              let minus_sqr_var = 0;
              let m_counter = 0;

              let devide_minus;

              let st_deviation;

              for (i = 0; i < text.length - 5; i++) {

                minus[i] = y_NaN_data[i] - mean;
                minus_var += minus[i];

                minus_sqr[i] = Math.pow(minus[i], 2);
                minus_sqr_var += minus_sqr[i];
                m_counter += 1;

              }

              devide_minus = minus_sqr_var / (m_counter - 1);

              st_deviation = Math.sqrt(devide_minus);

              let st_deviation_data_row_12 = document.createElement("td");
              st_deviation_data_row_12.innerHTML = st_deviation.toFixed(2);

              row_12.appendChild(st_deviation_data_row_12);
              tbody_6.appendChild(row_12);

              //console.log(minus_var);
              //console.log(minus_sqr_var);
              //console.log(devide_minus);
              //console.log(st_deviation);

              let more_years_data = document.createElement("td");

              for (i = 0; i < year.length; i++) {

                if (max_y_data == max[i]) {

                  more_years[i] = year[i];
                  
                  let table_7_1 = document.createElement("table");
                  let tbody_7_1 = document.createElement("tbody");

                  table_7_1.appendChild(tbody_7_1);
                  row_7.appendChild(more_years_data);       
                  
                  table_7_1.setAttribute("id", "special_table");

                  let data_7_1 = document.createElement("tr");
                  data_7_1.setAttribute("id", "special_tb_tr");
                  data_7_1.innerHTML = more_years[i];
                  
                  tbody_7_1.appendChild(data_7_1);
                  tbody_7_1.setAttribute("id", "special_tb_tr");
                  more_years_data.appendChild(table_7_1);
                  tbody_4.appendChild(row_7);

                }

              }

                let row_8_data_8 = document.createElement("td");
                row_8_data_8.innerHTML = max_y_data;

                row_8.appendChild(row_8_data_8);
                tbody_4.appendChild(row_8);

              let more_years_data_2 = document.createElement("td");

              for (i = 0; i < year_2.length; i++) {

                if (min_y_data == min[i]) {

                  more_years_2[i] = year_2[i];
                  
                  let table_7_2 = document.createElement("table");
                  let tbody_7_2 = document.createElement("tbody");

                  table_7_2.appendChild(tbody_7_2);
                  row_7.appendChild(more_years_data_2);       
                  
                  table_7_2.setAttribute("id", "special_table");

                  let data_7_2 = document.createElement("tr");
                  data_7_2.setAttribute("id", "special_tb_tr");
                  data_7_2.innerHTML = more_years_2[i];
                  
                  tbody_7_2.appendChild(data_7_2);
                  tbody_7_2.setAttribute("id", "special_tb_tr");
                  more_years_data_2.appendChild(table_7_2);
                  tbody_4.appendChild(row_7); 

                }

              }

                let row_8_data_8_2 = document.createElement("td");
                row_8_data_8_2.innerHTML = min_y_data;

                row_8.appendChild(row_8_data_8_2);
                tbody_4.appendChild(row_8);
                q = min_y_data;


              //console.log(max_y_data);
              //console.log(more_years);
              //console.log(min_y_data);
              //console.log(more_years_2);

              for (let k = 0; k < text.length - 1; k++) {

                u_data = new Array;
                u_data = text[k].split(":");
                r_data[k] = parseInt(u_data[1]);

                if (k == text.length - 2) {

                  let row_3_data_3 = document.createElement("td");
                  row_3_data_3.innerHTML = r_data[k - 3];
                  let row_4_data_4 = document.createElement("td");
                  row_4_data_4.innerHTML = r_data[k - 2];
                  let row_5_data_5 = document.createElement("td");
                  row_5_data_5.innerHTML = r_data[k - 1];
                  let row_6_data_6 = document.createElement("td");
                  row_6_data_6.innerHTML = r_data[k];

                  row_4.appendChild(row_3_data_3);
                  row_4.appendChild(row_4_data_4);
                  row_4.appendChild(row_5_data_5);
                  row_4.appendChild(row_6_data_6);

                }
    
               }

            //console.log(x_data);
            //console.log(y_data);

            /* Creating The Chart */
            ctx = document.getElementById("piechart").getContext("2d");

            if (Chart.getChart("piechart")) {

              Chart.getChart("piechart").destroy();

            }

            chart = new Chart(ctx, {
              type: "bar",
              data: {
                labels: x_data,
                datasets: [{
                  label: "Citations",
                  backgroundColor: "white",
                  borderColor: "#FFC107",
                  data: y_data,
                  options: {}
                }]
              }
            });

            /* Preventing Button Spam */
            info_plus = info_plus + 1;

            /* Enable Search button again */
            if (info_plus == 2) {

              document.getElementById("info").disabled = false;

            }

            document.getElementById("btn_print").hidden = false;

          }
        }

        check.open("GET", "php_file.php?user=" + s, true);
        check.send();

    } 

    /* Print The Information */
    if(btn_2) {

      btn_2.addEventListener("click", function press_3() {

        setSpecificSuccessFor(search, "<br>");

        var style = "<style>";
        style = style + "table {width: 100%; font: 17px; font-family: 'Courier New', monospace;}";
        style = style + "table, th, td {border: solid 1px #FFC107; border-collapse: collapse; background-color: #FFF3CD; padding: 2px 3px; text-align: center;}";
        style = style + "</style>";

        let header = '<h2>Citations</h2>' + '<div>' + '<table>' + $(".check_print_1").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_2").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_4").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_5").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_6").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_7").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_8").html() + '</table>' + '</div>';

        let  print_window = window.open('', '_blank', 'height=700,width=800');

        print_window.document.write(style);
        print_window.document.write(header);
        print_window.print();
        print_window.close();

      });
    }

  });

  btn.addEventListener("click", function press_2() {

    if (info_plus != 0 && info_plus!=1) {
    
      info_plus = 0;

    }

    setSpecificSuccessFor(search, "<br>");

    var search_field, s, text, x_data, y_NaN_data, y_data, split_axes, r_data, u_data, year, max, more_years, year_2, min, more_years_2, ctx, chart;
    
    search_field = document.getElementById("search");
    s = search_field.value.trim();

    if (s.length == 0) {
      document.getElementById("details_2").innerHTML = "";
      document.getElementById("btn_print_2").hidden = true;
      return;
    } 
    else {
        /* Checking Which Browser */
        if (window.XMLHttpRequest) {

          var check = new XMLHttpRequest();

          /* Preventing Button Spam */
          document.getElementById("info").disabled = true;
          /* Keep Button hidden */
          document.getElementById("btn_print_2").hidden = true;

        }
        else {

          var check = new ActiveXObject("Microsoft.XMLHTTP");

          /* Preventing Button Spam */
          document.getElementById("info").disabled = true;
          /* Keep Button hidden */
          document.getElementById("btn_print_2").hidden = true;

        }

        check.onreadystatechange = function() {

          if (check.readyState == 4 && check.status == 200) {

            //console.log(check.responseText);

            text = check.responseText;
            text = text.split("\n");
            //console.log(text);

            let table_0 = document.createElement("table");
            table_0.classList.add('check_print_10');
            let thead_0 = document.createElement("thead");
            let table = document.createElement("table");
            table.classList.add('d-none', 'd-lg-table', 'check_print_11');
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            let table_1 = document.createElement("table");
            table_1.classList.add('d-md-table', 'd-lg-none');
            let thead_1 = document.createElement("thead");
            let tbody_1 = document.createElement("tbody");
            let table_2 = document.createElement("table");
            table_2.classList.add('check_print_12');
            let thead_2 = document.createElement("thead");
            let tbody_2 = document.createElement("tbody");
            let table_3 = document.createElement("table");
            table_3.classList.add('check_print_13');
            let thead_3 = document.createElement("thead");
            let table_4 = document.createElement("table");
            table_4.classList.add('check_print_14');
            let thead_4 = document.createElement("thead");
            let tbody_4 = document.createElement("tbody");
            let table_5 = document.createElement("table");
            table_5.classList.add('check_print_15');
            let thead_5 = document.createElement("thead");
            let tbody_5 = document.createElement("tbody");
            let table_6 = document.createElement("table");
            table_6.classList.add('check_print_16');
            let thead_6 = document.createElement("thead");
            let tbody_6 = document.createElement("tbody");

            table_0.appendChild(thead_0);
            table.appendChild(thead);
            table.appendChild(tbody);
            table_1.appendChild(thead_1);
            table_1.appendChild(tbody_1);
            table_2.appendChild(thead_2);
            table_2.appendChild(tbody_2);
            table_3.appendChild(thead_3);
            table_4.appendChild(thead_4);
            table_4.appendChild(tbody_4);
            table_5.appendChild(thead_5);
            table_5.appendChild(tbody_5);
            table_6.appendChild(thead_6);
            table_6.appendChild(tbody_6);

            var row_0 = document.createElement("tr");
            let heading_0 = document.createElement("th");
            heading_0.innerHTML = "PUBLICATIONS";
            var row_1 = document.createElement("tr");
            let heading_1 = document.createElement("th");
            heading_1.innerHTML = "Year";
            var row_2 = document.createElement("tr");
            let heading_2 = document.createElement("th");
            heading_2.innerHTML = "Publications";
            var row_1_1 = document.createElement("td");
            let heading_1_1 = document.createElement("th");
            heading_1_1.innerHTML = "Year";
            var row_2_1 = document.createElement("td");
            let heading_2_1 = document.createElement("th");
            heading_2_1.innerHTML = "Publications";
            var row_3 = document.createElement("tr");
            let heading_3 = document.createElement("th");
            heading_3.innerHTML = "Sum of publications";
            let heading_4 = document.createElement("th");
            heading_4.innerHTML = "Sum of publications5";
            var row_4 = document.createElement("tr");
            var row_5 = document.createElement("tr");
            let heading_7 = document.createElement("th");
            heading_7.innerHTML = "BEST YEAR - WORST YEAR - MEAN - STANDARD DEVIATION"
            var row_6 = document.createElement("tr");
            let heading_8 = document.createElement("th");
            heading_8.innerHTML = "";
            let heading_9 = document.createElement("th");
            heading_9.innerHTML = "Best Year";
            let heading_10 = document.createElement("th");
            heading_10.innerHTML = "Worst Year";
            var row_7 = document.createElement("tr");
            let heading_11 = document.createElement("th");
            heading_11.innerHTML = "Year";
            var row_8 = document.createElement("tr");
            let heading_12 = document.createElement("th");
            heading_12.innerHTML = "Publications";
            var row_9 = document.createElement("tr");
            let heading_13 = document.createElement("th");
            heading_13.innerHTML = "Mean";
            var row_10 = document.createElement("tr");
            var row_11 = document.createElement("tr");
            let heading_14 = document.createElement("th");
            heading_14.innerHTML = "Standard Deviation";
            var row_12 = document.createElement("tr");

            row_0.appendChild(heading_0);
            row_1.appendChild(heading_1);
            row_2.appendChild(heading_2);
            row_1_1.appendChild(heading_1_1);
            row_2_1.appendChild(heading_2_1);
            row_3.appendChild(heading_3);
            row_3.appendChild(heading_4);
            row_5.appendChild(heading_7);
            row_6.appendChild(heading_8);
            row_6.appendChild(heading_9);
            row_6.appendChild(heading_10);
            row_7.appendChild(heading_11);
            row_8.appendChild(heading_12);
            row_9.appendChild(heading_13);
            row_11.appendChild(heading_14);
            thead_0.appendChild(row_0);
            thead.appendChild(row_1);
            thead.appendChild(row_2);
            thead_1.appendChild(row_1_1);
            thead_1.appendChild(row_2_1);
            thead_2.appendChild(row_3);
            tbody_2.appendChild(row_4);
            thead_3.appendChild(row_5);
            thead_4.appendChild(row_6);
            thead_4.appendChild(row_7);
            thead_4.appendChild(row_8);
            thead_5.appendChild(row_9);
            tbody_5.appendChild(row_10);
            thead_6.appendChild(row_11);
            tbody_6.appendChild(row_12);

            document.getElementById("details_2").appendChild(table_0);
            document.getElementById("details_2").appendChild(table);
            document.getElementById("details_2").appendChild(table_1);
            document.getElementById("details_2").appendChild(table_2);
            document.getElementById("details_2").appendChild(table_3);
            document.getElementById("details_2").appendChild(table_4);
            document.getElementById("details_2").appendChild(table_5);
            document.getElementById("details_2").appendChild(table_6);

            x_NaN_data = new Array;
            x_data = new Array;
            y_NaN_data = new Array;
            y_data = new Array;
            r_data = new Array;
            var max_y_data = 0;
            var min_y_data = 1000;
            var year_max_y_data;
            var year_min_y_data;
            year = new Array;
            max = new Array;
            more_years = new Array;
            min = new Array;
            more_years_2 = new Array;
            year_2 = new Array;

            //document.getElementById("details").innerHTML = text.join("<br/>");
            let sum_row_10 = 0;
            let s_r_10 = 0;

            for (let i = 0; i < text.length - 3; i++) {
              
              split_axes = new Array;
              split_axes = text[i].split(":");
              x_NaN_data[i] = parseInt(split_axes[0]) || 0;
              y_NaN_data[i] = parseInt(split_axes[1]) || 0;

              if (x_NaN_data[i] != 0) {

                x_data[i] = parseInt(split_axes[0]);
                y_data[i] = parseInt(split_axes[1]);

                if (max_y_data <= y_data[i]) {

                  max_y_data = y_data[i];
                  max[i] = max_y_data;
                  year_max_y_data = x_data[i];
                  year[i] = year_max_y_data;

                }

                if (min_y_data >= y_data[i]) {

                  min_y_data = y_data[i];
                  min[i] = min_y_data;
                  year_min_y_data = x_data[i];
                  year_2[i] = year_min_y_data;

                }

                let row_1_data_1 = document.createElement("td");
                row_1_data_1.innerHTML = x_data[i];
                let row_2_data_2 = document.createElement("td");
                row_2_data_2.innerHTML = y_data[i];

                let row_1_data_1_1 = document.createElement("tr");
                row_1_data_1_1.innerHTML = x_data[i];
                let row_2_data_2_1 = document.createElement("tr");
                row_2_data_2_1.innerHTML = y_data[i];

                row_1.appendChild(row_1_data_1);
                row_2.appendChild(row_2_data_2);
                tbody.appendChild(row_1);
                tbody.appendChild(row_2);

                row_1_1.appendChild(row_1_data_1_1);
                row_2_1.appendChild(row_2_data_2_1);
                tbody_1.appendChild(row_1_1);
                tbody_1.appendChild(row_2_1);

                sum_row_10 += y_data[i];
                s_r_10 += 1;

              }
              
            }

            let mean = sum_row_10 / s_r_10;
            //console.log(mean);

            let mean_data_row_10 = document.createElement("td");
            mean_data_row_10.innerHTML = mean.toFixed(2);

            row_10.appendChild(mean_data_row_10);
            tbody_5.appendChild(row_10);

            var minus = new Array;
            let minus_var = 0;

            var minus_sqr = new Array;
            let minus_sqr_var = 0;
            let m_counter = 0;

            let devide_minus;

            let st_deviation;

            for (i = 0; i < text.length - 3; i++) {

              minus[i] = y_NaN_data[i] - mean;
              minus_var += minus[i];

              minus_sqr[i] = Math.pow(minus[i], 2);
              minus_sqr_var += minus_sqr[i];
              m_counter += 1;

            }

            devide_minus = minus_sqr_var / (m_counter - 1);

            st_deviation = Math.sqrt(devide_minus);

            let st_deviation_data_row_12 = document.createElement("td");
            st_deviation_data_row_12.innerHTML = st_deviation.toFixed(2);

            row_12.appendChild(st_deviation_data_row_12);
            tbody_6.appendChild(row_12);

            //console.log(minus_var);
            //console.log(minus_sqr_var);
            //console.log(devide_minus);
            //console.log(st_deviation);

            let more_years_data = document.createElement("td");

            for (i = 0; i < year.length; i++) {

              if (max_y_data == max[i]) {

                more_years[i] = year[i];
                
                let table_7_1 = document.createElement("table");
                let tbody_7_1 = document.createElement("tbody");

                table_7_1.appendChild(tbody_7_1);
                row_7.appendChild(more_years_data);       
                
                table_7_1.setAttribute("id", "special_table");

                let data_7_1 = document.createElement("tr");
                data_7_1.setAttribute("id", "special_tb_tr");
                data_7_1.innerHTML = more_years[i];
                
                tbody_7_1.appendChild(data_7_1);
                tbody_7_1.setAttribute("id", "special_tb_tr");
                more_years_data.appendChild(table_7_1);
                tbody_4.appendChild(row_7);

              }

            }

            let row_8_data_8 = document.createElement("td");
            row_8_data_8.innerHTML = max_y_data;

            row_8.appendChild(row_8_data_8);
            tbody_4.appendChild(row_8);

            let more_years_data_2 = document.createElement("td");

            for (i = 0; i < year_2.length; i++) {

              if (min_y_data == min[i]) {

                more_years_2[i] = year_2[i];
                
                let table_7_2 = document.createElement("table");
                let tbody_7_2 = document.createElement("tbody");

                table_7_2.appendChild(tbody_7_2);
                row_7.appendChild(more_years_data_2);       
                
                table_7_2.setAttribute("id", "special_table");

                let data_7_2 = document.createElement("tr");
                data_7_2.setAttribute("id", "special_tb_tr");
                data_7_2.innerHTML = more_years_2[i];
                
                tbody_7_2.appendChild(data_7_2);
                tbody_7_2.setAttribute("id", "special_tb_tr");
                more_years_data_2.appendChild(table_7_2);
                tbody_4.appendChild(row_7); 

              }

            }

            let row_8_data_8_2 = document.createElement("td");
            row_8_data_8_2.innerHTML = min_y_data;

            row_8.appendChild(row_8_data_8_2);
            tbody_4.appendChild(row_8);
            q = min_y_data;


            //console.log(max_y_data);
            //console.log(more_years);
            //console.log(min_y_data);
            //console.log(more_years_2);

            for (let k = 0; k < text.length - 1; k++) {

              u_data = new Array;
              u_data = text[k].split(":");
              r_data[k] = parseInt(u_data[1]);

              if (k == text.length - 2) {

                let row_3_data_3 = document.createElement("td");
                row_3_data_3.innerHTML = r_data[k - 1];
                let row_4_data_4 = document.createElement("td");
                row_4_data_4.innerHTML = r_data[k];

                row_4.appendChild(row_3_data_3);
                row_4.appendChild(row_4_data_4);

              }
  
              }

            //console.log(x_data);
            //console.log(y_data);

            /* Creating The Chart */
            ctx = document.getElementById("piechart_2").getContext('2d');

            if (Chart.getChart("piechart_2")) {

              Chart.getChart("piechart_2").destroy();

            }

            chart = new Chart(ctx, {
              type: "bar",
              data: {
                labels: x_data,
                datasets: [{
                  label: "Publications",
                  backgroundColor: "white",
                  borderColor: "#FFC107",
                  data: y_data,
                  options: {}
                }]
              }
            });

            /* Preventing Button Spam */
            info_plus = info_plus + 1;

            /* Enable Search button again */
            if (info_plus == 2) {

              document.getElementById("info").disabled = false;

            }

            document.getElementById("btn_print_2").hidden = false;

          }
        }

        check.open("GET", "php_file_2.php?user=" + s, true);
        check.send();

    } 

    /* Print The Information */
    if(btn_3) {

      btn_3.addEventListener("click", function press_4() {

        setSpecificSuccessFor(search, "<br>");

        var style = "<style>";
        style = style + "table {width: 100%; font: 17px; font-family: 'Courier New', monospace;}";
        style = style + "table, th, td {border: solid 1px #FFC107; border-collapse: collapse; background-color: #FFF3CD; padding: 2px 3px; text-align: center;}";
        style = style + "</style>";

        let header = '<h2>Publications</h2>' + '<div>' + '<table>' + $(".check_print_10").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_11").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_12").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_13").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_14").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_15").html() + '</table>' + '</div>' + '<br>' + '<div>' + '<table>' + $(".check_print_16").html() + '</table>' + '</div>';

        let  print_window = window.open('', '_blank', 'height=700,width=800');

        print_window.document.write(style);
        print_window.document.write(header);
        print_window.print();
        print_window.close();

      });
    }

  });

  /* Save button */
  if (btn_save) {
    
    btn_save.addEventListener("click", function(press_save) {

      var search_field, s, e;

      search_field = document.getElementById("search");
      s = search_field.value.trim();

      e = window.sessionStorage.getItem('email');

      if (s.length !== 0) {

        $.when(searchCheck(s, e)).done(function(searchCheck_result){

          //console.log(JSON.parse(searchCheck_result));

          if (JSON.parse(searchCheck_result) == "OK") {

            var alert_window;
            alert_window = window.prompt("Please enter a name for the user's code:","");
            a = alert_window;

            if (a !== null) {

              a = alert_window.trim();

              if (a.length !== 0) {

                $.when(searchPass(e, s, a)).done(function(searchPass_result){

                  //console.log(JSON.parse(searchPass_result));

                  if (JSON.parse(searchPass_result) == "OK") {

                    setSpecificSuccessFor(search, "<br>");

                  }
          
                });

              }
              else {

                setSpecificErrorFor(search, "The name field is empty!");

              }

            }
            else {

              setSpecificErrorFor(search, "The action was canceled!");

            }

          }
          else {

            setSpecificErrorFor(search, "The user's code is already saved!");

          }

      });

      }
      else {

        setSpecificErrorFor(search, "The search field is empty!");

      }

    });

  }

  /* Dropdown Button */
  if (btn_dropdown) {

    $("#ul_show").css('visibility', 'hidden');

    btn_dropdown.addEventListener("click", function(press_dropdown) {

      if ($(".inactive")[0] && !$(".li_show")[0]) {

        $("#btn_dropdown").removeClass("inactive");
        $("#btn_dropdown").addClass("active");

        var e;

        e = window.sessionStorage.getItem('email');

        $.when(CodeDataBaseCheck(e)).done(function(CodeDataBaseCheck_result){

          //console.log(JSON.parse(CodeDataBaseCheck_result));

          Code_res = JSON.parse(CodeDataBaseCheck_result);

          if (Code_res !== "ERROR") {

            $("#ul_show").css('visibility', 'visible');

            setSpecificSuccessFor(search, "<br>");
      
            var Ajax_Code_res_split = JSON.stringify(Code_res).replace(/"/g, '');

            Ajax_Code_res_split = Ajax_Code_res_split.replace(/\[/g, '');

            Ajax_Code_res_split = Ajax_Code_res_split.replace(/\]/g, '');

            Ajax_Code_res_split = Ajax_Code_res_split.split(",");
            //console.log(Ajax_Code_res_split);

            var Ajax_code_split_names = new Array;
            var Ajax_code_split_codes = new Array;
            var Code_Name_fetch = new Array;

            $("#ul_show").addClass("show");
            $("#ul_show").html("");

            for (let i = 0; i < Ajax_Code_res_split.length; i++) {

              var Ajax_code_split = new Array;

              Ajax_code_split = Ajax_Code_res_split[i].split(":");
              //console.log(Ajax_Code_res_split[i]);
              Ajax_code_split_names[i] = Ajax_code_split[0];
              Ajax_code_split_codes[i] = Ajax_code_split[1];
              Code_Name_fetch[i] = (Ajax_code_split_names[i] + ": " + Ajax_code_split_codes[i]);
              $("#ul_show").append('<li class="li_show btn-group w-100" role="group">' + '<button class="dropdown-item special_onclick w-75 text-wrap" type="button"' + 'id="' + 'SendSearch_' + i + '"' + 'value="' + Ajax_code_split_codes[i] + '"' + '>' + Ajax_code_split_names[i] + ": " + "<br>" + Ajax_code_split_codes[i] + '</button>' + '<button class="btn text-center text-light dropdown-item special_btn_onclick w-25" type="button"' + 'value="' + Ajax_code_split_codes[i] + '"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#DC3545" class="bi bi-dash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/></svg></button>' + '</li>' + '<li><hr class="dropdown-divider">' + '</li>');

            }

            $("#ul_show").find("li:last").remove();
          
          }
          else {

            $("#ul_show").css('visibility', 'hidden');

            setSpecificErrorFor(ul_show, "You don't have any codes saved!");

          }

        });

      }
      else {

        $("#ul_show").css('visibility', 'hidden');
        $("#ul_show").html("");

        $("#btn_dropdown").removeClass("active");
        $("#btn_dropdown").addClass("inactive");

      }

    });

    $("#ul_show").on("mousedown", ".special_onclick", function() {

      var val;
    
      val = $(this).val();
      document.getElementById("search").value = val;

    });

    $("#ul_show").on("mousedown", ".special_btn_onclick", function() {

      var e, val;
    
      e = window.sessionStorage.getItem('email');
      val = $(this).val();

      $.when(deleteCode(e, val)).done(function(deleteCode_result){

        //console.log(JSON.parse(deleteCode_result));

        deleteCode_res = JSON.parse(deleteCode_result);

        if (deleteCode_res == "OK") {

          //console.log("The user's code deleted successfully!")

        }
        else {

          //console.log("Failed to delete the user's code!")

        }

      });

    });

    $("#btn_dropdown").blur(function() {

      if (!$(".inactive")[0]) {

        $("#ul_show").css('visibility', 'hidden');
        $("#ul_show").removeClass("show");
        $("#ul_show").html("");

        $("#btn_dropdown").removeClass("active");
        $("#btn_dropdown").addClass("inactive");

      }

    });

  }

}

/* Refresh The Java Script Table and Charts */
$(document).ready(function() {

  function RefreshTable() {

    $("#details").load("html_file.html #details");
    $("#piechart_refrsh").load("html_file.html #piechart_refrsh");
    $("#details_2").load("html_file.html #details_2");
    $("#piechart_refrsh_2").load("html_file.html #piechart_refrsh_2");

  }

  $("#info").on("click", RefreshTable);

})

/* Delete account button */
var btn_delete;

btn_delete = document.getElementById("delete_account");

if (btn_delete) {

  btn_delete.addEventListener("click", function(press_delete) {

    setSpecificSuccessFor(search, "<br>");

    var alert_window;
    alert_window = window.confirm("Are you sure the you want to DELETE your account?");
    a = alert_window;

    if (a == true) {

      var e;

      e = window.sessionStorage.getItem('email');
      
      $.when(deleteUser(e)).done(function(delete_res){

        //console.log(JSON.parse(delete_res));

        if (JSON.parse(delete_res) == "OK") {

          window.sessionStorage.clear();

          //Redirect user to the Log in page
          window.location.href = "index.html";

        }
        else {

          //console.log("Failed to delete the user!")

        }

      });

    }
    else {

      //console.log("The action was canceled!")

    }

  });

}

/* Sign up button */
var btn_register;

btn_register = document.getElementById("btn_sign_up");

if (btn_register) {

  document.getElementById("message").hidden = true;

  btn_register.addEventListener("click", function(press_register) {

    var count_valid;
    count_valid = 0;

    var fistname_field, lastname_field, username_field, email_field, password_field, password_confirm_field, n, e, p, pc;

    fistname_field = document.getElementById("firstname");
    f = fistname_field.value.trim();

    lastname_field = document.getElementById("lastname");
    l = lastname_field.value.trim();

    username_field = document.getElementById("username");
    n = username_field.value.trim();
    
    email_field = document.getElementById("email");
    e = email_field.value.trim();

    password_field = document.getElementById("password");
    p = password_field.value.trim();

    password_confirm_field = document.getElementById("password_confirm");
    pc = password_confirm_field.value.trim();

    if (f.length == 0) {

      setErrorFor(firstname, 'Firstname can not be blank!');

      document.getElementById("firstname").classList.remove('is-valid');
      document.getElementById("firstname").classList.add('is-invalid');
      
    }
    else {

      setSuccessFor(firstname);

      document.getElementById("firstname").classList.remove('is-invalid');
      document.getElementById("firstname").classList.add('is-valid');

      count_valid = count_valid + 1;
      
    }

    if (l.length == 0) {

      setErrorFor(lastname, 'Lastname can not be blank!');

      document.getElementById("lastname").classList.remove('is-valid');
      document.getElementById("lastname").classList.add('is-invalid');
      
    }
    else {

      setSuccessFor(lastname);

      document.getElementById("lastname").classList.remove('is-invalid');
      document.getElementById("lastname").classList.add('is-valid');

      count_valid = count_valid + 1;
      
    }

    if (n.length == 0) {

      setErrorFor(username, 'Username can not be blank!');

      document.getElementById("username").classList.remove('is-valid');
      document.getElementById("username").classList.add('is-invalid');
      
    }
    else {

      $.when(usernameCheck(n)).done(function(Ajax_error_1){

        //console.log(JSON.parse(Ajax_error_1));
        if (JSON.parse(Ajax_error_1) == "OK") {

          count_valid = count_valid + 1;

        }

      });
      
    }

    if (e.length == 0) {

      setErrorFor(email, 'Email can not be blank!');

      document.getElementById("email").classList.remove('is-valid');
      document.getElementById("email").classList.add('is-invalid');

    }
    else {

      if (isEmail(e)) {

        $.when(emailCheck(e)).done(function(Ajax_error_2){

          //console.log(JSON.parse(Ajax_error_2));
          count_valid = count_valid + 1;

          if (count_valid !== 6) {
      
            press_register.preventDefault();
            press_register.stopPropagation();
          
          }
          else if (count_valid == 6 && JSON.parse(Ajax_error_2) == "OK") {

            $.when(passData(f, l, n, e, p)).done(function(passDataResponse) {

              //console.log(JSON.parse(passDataResponse));

              document.getElementById("firstname").classList.remove('is-valid');
              document.getElementById("lastname").classList.remove('is-valid');
              document.getElementById("username").classList.remove('is-valid');
              document.getElementById("email").classList.remove('is-valid');
              document.getElementById("password").classList.remove('is-valid');
              document.getElementById("password_confirm").classList.remove('is-valid');
              document.getElementById("register_done").reset();

              $.when(pass_SESSION(e)).done(function(Ajax_SESSION_res) {

                //console.log(JSON.parse(Ajax_SESSION_res));
    
                SESSION_res = JSON.parse(Ajax_SESSION_res);
    
                var Ajax_SESSION_res_split = JSON.stringify(SESSION_res).replace(/"/g, '');
    
                Ajax_SESSION_res_split = Ajax_SESSION_res_split.replace(/{/g, '');
    
                Ajax_SESSION_res_split = Ajax_SESSION_res_split.replace(/}/g, '');
    
                Ajax_SESSION_res_split = Ajax_SESSION_res_split.split(",");
                //console.log(Ajax_SESSION_res_split);
    
                var Ajax_SESSION_split_vars = new Array;
                var Ajax_SESSION_split_values = new Array;
    
                for (let i = 0; i < Ajax_SESSION_res_split.length; i++) {
    
                  var Ajax_SESSION_split = new Array;
    
                  Ajax_SESSION_split = Ajax_SESSION_res_split[i].split(":");
                  //console.log(Ajax_SESSION_res_split[i]);
                  Ajax_SESSION_split_vars[i] = Ajax_SESSION_split[0];
                  Ajax_SESSION_split_values[i] = Ajax_SESSION_split[1];
                  window.sessionStorage.setItem(Ajax_SESSION_split_vars[i], Ajax_SESSION_split_values[i]);
    
                }
    
                //console.log(window.sessionStorage);
    
              });
    
              //Redirect user to the Home page
              window.setTimeout(function() {
    
                window.location.href = "html_file.html";
    
              }, 1000);

            })

          }

        })
        
      }
      else {

        setErrorFor(email, 'You have entered an invalid email address!');

        document.getElementById("email").classList.remove('is-valid');
        document.getElementById("email").classList.add('is-invalid');

      }

    }

    if (p.length == 0) {

      setErrorFor(password, 'Password can not be blank!');

      document.getElementById("password").classList.remove('is-valid');
      document.getElementById("password").classList.add('is-invalid');

    }
    else {

      if (p.length >= 8 && p.length <= 20) {

        if (isPassword(p)) {

          setSuccessFor(password);

          document.getElementById("password").classList.remove('is-invalid');
          document.getElementById("password").classList.add('is-valid');

          count_valid = count_valid + 1;
        }
        else {

          setErrorFor(password, 'Password must include the following (At least one special character, at least one uppercase letter, at least one number)');

          document.getElementById("password").classList.remove('is-valid');
          document.getElementById("password").classList.add('is-invalid');

        }

      }
      else if (p.length < 8)
      {

        setErrorFor(password, 'Password has to be at least 8 characters!');

        document.getElementById("password").classList.remove('is-valid');
        document.getElementById("password").classList.add('is-invalid');

      }
      else if (p.length > 20)
      {

        setErrorFor(password, 'Password has to be less than 21 characters!');

        document.getElementById("password").classList.remove('is-valid');
        document.getElementById("password").classList.add('is-invalid');

      }

    }

    if (pc.length == 0) {

      setErrorFor(password_confirm, 'Confirm Password can not be blank!');

      document.getElementById("password_confirm").classList.remove('is-valid');
      document.getElementById("password_confirm").classList.add('is-invalid');

    }
    else {

      if (p !== pc) {

        setErrorFor(password_confirm, 'Please enter the same password!');

        document.getElementById("password_confirm").classList.remove('is-valid');
        document.getElementById("password_confirm").classList.add('is-invalid');

      }
      else {

        setSuccessFor(password_confirm);

        document.getElementById("password_confirm").classList.remove('is-invalid');
        document.getElementById("password_confirm").classList.add('is-valid');

        count_valid = count_valid + 1;

      }

    }

    if (count_valid !== 6) {
    
      press_register.preventDefault();
      press_register.stopPropagation();
      return;
    
    }
      
  });

}

/* Sign in button */
var btn_log_in;

btn_log_in = document.getElementById("btn_sign_in");

if (btn_log_in) {

  document.getElementById("message").hidden = true;
  
  btn_log_in.addEventListener("click", function(press_log_in) {

    var count_valid;
    count_valid = 0;

    var username_email__field, password_field, n_e, p;

    username_email__field = document.getElementById("username_email");
    n_e = username_email__field.value.trim();
    
    password_field = document.getElementById("password");
    p = password_field.value.trim();

    if (n_e.length == 0) {

      setErrorFor(username_email, 'Username can not be blank!');

      document.getElementById("username_email").classList.remove('is-valid');
      document.getElementById("username_email").classList.add('is-invalid');
      
    }
    else {

      $.when(username_emailExist(n_e, p)).done(function(Ajax_error_3) {

        //console.log(JSON.parse(Ajax_error_3));
        count_valid = count_valid + 2;

        if (count_valid !== 2) {
    
          press_log_in.preventDefault();
          press_log_in.stopPropagation();
        
        }
        else if (count_valid == 2 && JSON.parse(Ajax_error_3) == "OK") {

          document.getElementById("message").hidden = false;
          $("#message").fadeIn(800).addClass('success').fadeOut(1800);

          document.getElementById("username_email").classList.remove('is-valid');
          document.getElementById("password").classList.remove('is-valid');
          document.getElementById("login_done").reset();

          $.when(pass_SESSION(n_e)).done(function(Ajax_SESSION_res) {

            //console.log(JSON.parse(Ajax_SESSION_res));

            SESSION_res = JSON.parse(Ajax_SESSION_res);

            var Ajax_SESSION_res_split = JSON.stringify(SESSION_res).replace(/"/g, '');

            Ajax_SESSION_res_split = Ajax_SESSION_res_split.replace(/{/g, '');

            Ajax_SESSION_res_split = Ajax_SESSION_res_split.replace(/}/g, '');

            Ajax_SESSION_res_split = Ajax_SESSION_res_split.split(",");
            //console.log(Ajax_SESSION_res_split);

            var Ajax_SESSION_split_vars = new Array;
            var Ajax_SESSION_split_values = new Array;

            for (let i = 0; i < Ajax_SESSION_res_split.length; i++) {

              var Ajax_SESSION_split = new Array;

              Ajax_SESSION_split = Ajax_SESSION_res_split[i].split(":");
              //console.log(Ajax_SESSION_res_split[i]);
              Ajax_SESSION_split_vars[i] = Ajax_SESSION_split[0];
              Ajax_SESSION_split_values[i] = Ajax_SESSION_split[1];
              window.sessionStorage.setItem(Ajax_SESSION_split_vars[i], Ajax_SESSION_split_values[i]);

            }

            //console.log(window.sessionStorage);

          });

          //Redirect user to the Home page
          window.setTimeout(function() {

            window.location.href = "html_file.html";

          }, 1000);

        }
        else if (count_valid == 2 && JSON.parse(Ajax_error_3) == "OK_ERROR" && p.length !== 0) {

          setErrorFor(password, 'The password is wrong!');

          document.getElementById("password").classList.remove('is-valid');
          document.getElementById("password").classList.add('is-invalid');

        }

      })
      
    }

    if (p.length == 0) {

      setErrorFor(password, 'Password can not be blank!');

      document.getElementById("password").classList.remove('is-valid');
      document.getElementById("password").classList.add('is-invalid');
      
    }
    else {

      setSuccessFor(password);

      document.getElementById("password").classList.remove('is-invalid');
      document.getElementById("password").classList.add('is-valid');
      
    }

    if (count_valid !== 2) {
    
      press_log_in.preventDefault();
      press_log_in.stopPropagation();
      return;
    
    }

  });
  
}

/* Sign out button */
var btn_log_out;

btn_log_out = document.getElementById("btn_sign_out");

if (btn_log_out) {

  //document.getElementById("message").hidden = true;
  
  btn_log_out.addEventListener("click", function(press_log_out) {

    window.sessionStorage.clear();

    //console.log(window.sessionStorage);

    //Redirect user to the Log in page
    window.location.href = "index.html";

  });

}

/* Send email send token button */
var btn_email_send;

btn_email_send = document.getElementById("btn_send");

if (btn_email_send) {

  document.getElementById("message").hidden = true;
  
  btn_email_send.addEventListener("click", function(press_email_send) {

    var count_valid;
    count_valid = 0;

    var email_field;
    email_field = document.getElementById("email");
    e = email_field.value.trim();

    if (e.length == 0) {

      setErrorFor(email, 'Email can not be blank!');

      document.getElementById("email").classList.remove('is-valid');
      document.getElementById("email").classList.add('is-invalid');

    }
    else {

      if (isEmail(e)) {

        $.when(emailCheckSend(e)).done(function(Ajax_Email_Check_res){

          //console.log(JSON.parse(Ajax_Email_Check_res));
          count_valid = count_valid + 1;

          if (count_valid !== 1) {
      
            press_register.preventDefault();
            press_register.stopPropagation();
          
          }
          else if (count_valid == 1 && JSON.parse(Ajax_Email_Check_res) == "ERROR") {

            $.when(passEmailSend(e)).done(function(passEmailSendResponse) {

              //console.log(JSON.parse(passEmailSendResponse));

              document.getElementById("message").hidden = false;
              $("#message").fadeIn(800).addClass('success').fadeOut(1800);

              document.getElementById("email").classList.remove('is-valid');
              document.getElementById("send_done").reset();
    
              //Redirect user to the Log in page
              window.setTimeout(function() {
    
                window.location.href = "index.html";
    
              }, 1000);

            });

          }

        })
        
      }
      else {

        setErrorFor(email, 'You have entered an invalid email address!');

        document.getElementById("email").classList.remove('is-valid');
        document.getElementById("email").classList.add('is-invalid');

      }

    }
    
    if (count_valid !== 1) {
    
      press_email_send.preventDefault();
      press_email_send.stopPropagation();
      return;
    
    }

  });

}

/* Reset password button */
var btn_reset_password;
btn_reset_password = document.getElementById("btn_reset_password");

if (btn_reset_password) {

  var url_grabber;

  url_grabber = $(location).attr('href');
  //console.log(url_grabber);

  url_grabber = JSON.stringify(url_grabber);

  if (url_grabber.includes("=")) {

      var url_split = new Array;

      url_split = url_grabber.split("=");
      token = url_split[1];
      token = token.replace(/"/g, '');
      //console.log(token);
      u = token;

      $.when(tokenexistanceCheck(u)).done(function(tokenexistanceCheck_result) {

        //console.log(JSON.parse(tokenexistanceCheck_result));

        if (JSON.parse(tokenexistanceCheck_result) !== "OK") {

          //Redirect user to the Log in page
          window.location.href = "index.html";

        }

      });
  }

  document.getElementById("message").hidden = true;
  
  btn_reset_password.addEventListener("click", function(press_reset_password) {

    var count_valid;
    count_valid = 0;

    var password_field, password_confirm_field;
    password_field = document.getElementById("password");
    p = password_field.value.trim();
    password_confirm_field = document.getElementById("password_confirm");
    pc = password_confirm_field.value.trim();

    if (p.length == 0) {

      setErrorFor(password, 'Password can not be blank!');

      document.getElementById("password").classList.remove('is-valid');
      document.getElementById("password").classList.add('is-invalid');

    }
    else {

      if (p.length >= 8 && p.length <= 20) {

        if (isPassword(p)) {

          setSuccessFor(password);

          document.getElementById("password").classList.remove('is-invalid');
          document.getElementById("password").classList.add('is-valid');

          count_valid = count_valid + 1;
        }
        else {

          setErrorFor(password, 'Password must include the following (At least one special character, at least one uppercase letter, at least one number)');

          document.getElementById("password").classList.remove('is-valid');
          document.getElementById("password").classList.add('is-invalid');

        }

      }
      else if (p.length < 8)
      {

        setErrorFor(password, 'Password has to be at least 8 characters!');

        document.getElementById("password").classList.remove('is-valid');
        document.getElementById("password").classList.add('is-invalid');

      }
      else if (p.length > 20)
      {

        setErrorFor(password, 'Password has to be less than 21 characters!');

        document.getElementById("password").classList.remove('is-valid');
        document.getElementById("password").classList.add('is-invalid');

      }

    }

    if (pc.length == 0) {

      setErrorFor(password_confirm, 'Confirm Password can not be blank!');

      document.getElementById("password_confirm").classList.remove('is-valid');
      document.getElementById("password_confirm").classList.add('is-invalid');

    }
    else {

      if (p !== pc) {

        setErrorFor(password_confirm, 'Please enter the same password!');

        document.getElementById("password_confirm").classList.remove('is-valid');
        document.getElementById("password_confirm").classList.add('is-invalid');

      }
      else {

        setSuccessFor(password_confirm);

        document.getElementById("password_confirm").classList.remove('is-invalid');
        document.getElementById("password_confirm").classList.add('is-valid');

        $.when(passwordChange(p, u)).done(function(Ajax_Password_Check_res){

          //console.log(JSON.parse(Ajax_Password_Check_res));
          count_valid = count_valid + 1;

          if (count_valid !== 2) {
      
            press_register.preventDefault();
            press_register.stopPropagation();
          
          }
          else if (count_valid == 2 && JSON.parse(Ajax_Password_Check_res) == "OK") {

            document.getElementById("message").hidden = false;
            $("#message").fadeIn(800).addClass('success').fadeOut(1800);

            document.getElementById("password").classList.remove('is-valid');
            document.getElementById("password_confirm").classList.remove('is-valid');
            document.getElementById("reset_done").reset();
  
            //Redirect user to the Log in page
            window.setTimeout(function() {
  
              window.location.href = "index.html";
  
            }, 1000);

          }

        });

      }

    }

    if (count_valid !== 2) {
    
      press_reset_password.preventDefault();
      press_reset_password.stopPropagation();
      return;
    
    }

  });

}

/* Check on load for not valid users */
timestampCheck();

function timestampCheck() {

  return $.ajax({

          url: "php_data_base_timestampcheck_tokenverification_update.php",
          type: "POST",
          data:{},
          cache: false,
          success: function() {

          }

        });

}

function setSpecificErrorFor(input, message) {

  const inputGroup = input.parentElement;
  const formGroup = inputGroup.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.classList = 'm-3 text-start form-group error';
	small.innerText = message;

}

function setSpecificSuccessFor(input, message) {

  const inputGroup = input.parentElement;
  const formGroup = inputGroup.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.classList = 'm-3 text-start form-group success';
	small.innerText = message;

}

function setErrorFor(input, message) {

	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.classList = 'form-group error';
	small.innerText = message;

}

function setSuccessFor(input) {

	const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
	formGroup.classList = 'form-group success';
  small.innerText = "Success";

}

function isEmail(email) {

	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);

}

function isPassword(password) {

  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(password);

}

function usernameCheck(n) {

  return $.ajax({

            url: "php_data_base_usernamecheck.php",
            type: "POST",
            data:{username:n},
            cache: false,
            success: function(data_username) {
            
              var n_result;

              n_result = JSON.parse(data_username);

              if (n_result == "ERROR") {

                setErrorFor(username, 'Username already exists!');
          
                document.getElementById("username").classList.remove('is-valid');
                document.getElementById("username").classList.add('is-invalid');
          
              }
              else if (n_result == "OK") {
                
                setSuccessFor(username);
          
                document.getElementById("username").classList.remove('is-invalid');
                document.getElementById("username").classList.add('is-valid');
          
              }

            }

          });

}

function emailCheck(e) {

  return $.ajax({

            url: "php_data_base_emailcheck.php",
            type: "POST",
            data:{email:e},
            cache: false,
            success: function(data_email) {
            
              var e_result;

              e_result = JSON.parse(data_email);

              if (e_result == "ERROR") {

                setErrorFor(email, 'Email already exists!');
          
                document.getElementById("email").classList.remove('is-valid');
                document.getElementById("email").classList.add('is-invalid');
          
              }
              else if (e_result == "OK") {
                
                setSuccessFor(email);
          
                document.getElementById("email").classList.remove('is-invalid');
                document.getElementById("email").classList.add('is-valid');
          
              }
        
            }
        
          });

}

function emailCheckSend(e) {

  return $.ajax({

            url: "php_data_base_emailcheck.php",
            type: "POST",
            data:{email:e},
            cache: false,
            success: function(data_email) {
            
              var e_result;

              e_result = JSON.parse(data_email);

              if (e_result == "OK") {

                setErrorFor(email, 'Email does not exist!');
          
                document.getElementById("email").classList.remove('is-valid');
                document.getElementById("email").classList.add('is-invalid');
          
              }
              else if (e_result == "ERROR") {
                
                setSuccessFor(email);
          
                document.getElementById("email").classList.remove('is-invalid');
                document.getElementById("email").classList.add('is-valid');
          
              }
        
            }
        
          });

}

function passEmailSend(e) {

  return $.ajax({

          url: "php_data_base_email_token_send.php",
          type: "POST",
          data:{email:e},
          cache: false,
          success: function(data_email_token_send) {
          
            var email_token_send_result;

            email_token_send_result = JSON.parse(data_email_token_send);

            if (email_token_send_result == "RESPONSE: OK") {

              //console.log("Email token send success!")

            }
            else {

              //console.log("Email token send fail!")

            }

          }

        });

}

function passwordChange(p, u) {

  return $.ajax({

    url: "php_data_base_password_change.php",
    type: "POST",
    data:{password:p, url_token:u},
    cache: false,
    success: function(data_password_changed) {
    
      var password_changed_result;

      password_changed_result = JSON.parse(data_password_changed);

      if (password_changed_result == "OK") {

        //console.log("Password change success!")

      }
      else {

        //console.log("Password change fail!")

      }

    }

  });

}

function passData(f, l, n, e, p) {

  var database_firstname = f;
  var database_lastname = l;
  var database_username = n;
  var database_email = e;
  var database_password = p;

  var formData = {firstname: database_firstname, lastname: database_lastname ,username: database_username, email: database_email, password: database_password};

  document.getElementById("message").hidden = false;
  $("#message").fadeIn(1000).addClass('success').fadeOut(2000);

  return $.ajax({
    
            url: "php_data_base_register.php", 
            type: 'POST', 
            data: formData, 
            cache: false, 
            success: function(response) {
              
              var res;

              res = JSON.parse(response);
            
            }

          });

}

function username_emailExist(n_e, p) {

  if (isEmail(n_e)) {

    return $.ajax({

              url: "php_data_base_login_username_emailexist.php",
              type: "POST",
              data:{email:n_e, password: p},
              cache: false,
              success: function(data_email) {
              
                var e_result;

                e_result = JSON.parse(data_email);

                if (e_result == "ERROR") {

                  setErrorFor(username_email, 'The email is not valid, please enter a valid email!');
            
                  document.getElementById("username_email").classList.remove('is-valid');
                  document.getElementById("username_email").classList.add('is-invalid');
            
                }
                else if (e_result == "OK_ERROR") {
                  
                  setSuccessFor(username_email);
            
                  document.getElementById("username_email").classList.remove('is-invalid');
                  document.getElementById("username_email").classList.add('is-valid');
            
                }
                else if (e_result == "OK") {

                  setSuccessFor(username_email);
            
                  document.getElementById("username_email").classList.remove('is-invalid');
                  document.getElementById("username_email").classList.add('is-valid');

                }

              }

            });
  }
  else {

    return $.ajax({

              url: "php_data_base_login_username_emailexist.php",
              type: "POST",
              data:{username:n_e, password: p},
              cache: false,
              success: function(data_username) {
              
                var n_result;

                n_result = JSON.parse(data_username);

                if (n_result == "ERROR") {

                  setErrorFor(username_email, 'The username is not valid, please enter a valid username!');
            
                  document.getElementById("username_email").classList.remove('is-valid');
                  document.getElementById("username_email").classList.add('is-invalid');
            
                }
                else if (n_result == "OK_ERROR") {
                  
                  setSuccessFor(username_email);
            
                  document.getElementById("username_email").classList.remove('is-invalid');
                  document.getElementById("username_email").classList.add('is-valid');
            
                }
                else if (n_result == "OK") {
                  
                  setSuccessFor(username_email);
            
                  document.getElementById("username_email").classList.remove('is-invalid');
                  document.getElementById("username_email").classList.add('is-valid');
            
                }

              }

            });

  }

}

function pass_SESSION(n_e) {

  return $.ajax({

            url: "php_data_base_login_session.php",
            type: "POST",
            data:{username:n_e},
            cache: false,
            success: function(data_SESSION) {
            
              var SESSION_result;

              SESSION_result = JSON.parse(data_SESSION);

              if (SESSION_result !== "") {

                //console.log("SESSION success!")

              }
              else {

                //console.log("SESSION fail!")

              }

            }

          });

}

function tokenexistanceCheck(u) {

  return $.ajax({

              url: "php_data_base_token_existance_2.php",
              type: "POST",
              data:{token:u},
              cache: false,
              success: function(token_existance) {
              
              var token_result;

              token_result = JSON.parse(token_existance);

              if (token_result == "OK") {

                  //console.log("Token success!")

              }
              else {

                  //console.log("Token fail!")

              }

              }

          });

}

function searchCheck(s, e) {

  return $.ajax({

              url: "php_data_base_searchcode_existance.php",
              type: "POST",
              data:{code:s, email:e},
              cache: false,
              success: function(code_existance) {
              
              var code_result;

              code_result = JSON.parse(code_existance);

              if (code_result == "OK") {

                  //console.log("Code success!")

              }
              else {

                  //console.log("Code fail!")

              }

              }

          });

}

function searchPass(e, s, a) {

  return $.ajax({

            url: "php_data_base_searchcode_pass.php",
            type: "POST",
            data:{email:e, code:s, name:a},
            cache: false,
            success: function(code_pass) {
            
            var code_result;

            code_result = JSON.parse(code_pass);

            if (code_result == "OK") {

                //console.log("Code success!")

            }
            else {

                //console.log("Code fail!")

            }

            }

        });

}

function CodeDataBaseCheck(e) {

  return $.ajax({

            url: "php_data_base_code_name_fetch.php",
            type: "POST",
            data:{email:e},
            cache: false,
            success: function(Code_Name_fetch) {
            
            var Code_Name_fetch_result;

            Code_Name_fetch_result = JSON.parse(Code_Name_fetch);

              if (Code_Name_fetch_result == "ERROR") {

                //console.log(Code_Name_fetch_result);

              }

            }

        });

}

function deleteUser(e) {

  return $.ajax({

            url: "php_data_base_delete_user.php",
            type: "POST",
            data:{email:e},
            cache: false,
            success: function(delete_user) {
            
            var delete_res;

            delete_res = JSON.parse(delete_user);

              if (delete_res == "OK") {

                //console.log(delete_res);

              }

            }

          });

}

function deleteCode(e, val) {

  return $.ajax({

            url: "php_data_base_delete_code.php",
            type: "POST",
            data:{email:e, code:val},
            cache: false,
            success: function(delete_code) {
            
            var delete_res;

            delete_res = JSON.parse(delete_code);

              if (delete_res == "OK") {

                //console.log(delete_res);

              }

            }

          });

}
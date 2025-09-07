/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 228.0, "minX": 0.0, "maxY": 1388.0, "series": [{"data": [[0.0, 228.0], [0.1, 228.0], [0.2, 228.0], [0.3, 228.0], [0.4, 230.0], [0.5, 230.0], [0.6, 230.0], [0.7, 230.0], [0.8, 231.0], [0.9, 231.0], [1.0, 231.0], [1.1, 231.0], [1.2, 231.0], [1.3, 233.0], [1.4, 233.0], [1.5, 233.0], [1.6, 235.0], [1.7, 235.0], [1.8, 235.0], [1.9, 235.0], [2.0, 237.0], [2.1, 237.0], [2.2, 237.0], [2.3, 237.0], [2.4, 237.0], [2.5, 237.0], [2.6, 237.0], [2.7, 237.0], [2.8, 238.0], [2.9, 238.0], [3.0, 238.0], [3.1, 238.0], [3.2, 238.0], [3.3, 238.0], [3.4, 238.0], [3.5, 238.0], [3.6, 240.0], [3.7, 240.0], [3.8, 240.0], [3.9, 240.0], [4.0, 241.0], [4.1, 241.0], [4.2, 241.0], [4.3, 241.0], [4.4, 242.0], [4.5, 242.0], [4.6, 242.0], [4.7, 242.0], [4.8, 244.0], [4.9, 244.0], [5.0, 244.0], [5.1, 244.0], [5.2, 244.0], [5.3, 244.0], [5.4, 244.0], [5.5, 244.0], [5.6, 249.0], [5.7, 249.0], [5.8, 249.0], [5.9, 249.0], [6.0, 250.0], [6.1, 250.0], [6.2, 250.0], [6.3, 250.0], [6.4, 252.0], [6.5, 252.0], [6.6, 252.0], [6.7, 252.0], [6.8, 252.0], [6.9, 253.0], [7.0, 253.0], [7.1, 253.0], [7.2, 253.0], [7.3, 254.0], [7.4, 254.0], [7.5, 254.0], [7.6, 254.0], [7.7, 256.0], [7.8, 256.0], [7.9, 256.0], [8.0, 256.0], [8.1, 257.0], [8.2, 257.0], [8.3, 257.0], [8.4, 257.0], [8.5, 258.0], [8.6, 258.0], [8.7, 258.0], [8.8, 258.0], [8.9, 259.0], [9.0, 259.0], [9.1, 259.0], [9.2, 259.0], [9.3, 261.0], [9.4, 261.0], [9.5, 261.0], [9.6, 261.0], [9.7, 262.0], [9.8, 262.0], [9.9, 262.0], [10.0, 262.0], [10.1, 262.0], [10.2, 262.0], [10.3, 262.0], [10.4, 262.0], [10.5, 262.0], [10.6, 262.0], [10.7, 262.0], [10.8, 262.0], [10.9, 262.0], [11.0, 262.0], [11.1, 262.0], [11.2, 262.0], [11.3, 262.0], [11.4, 262.0], [11.5, 262.0], [11.6, 262.0], [11.7, 263.0], [11.8, 263.0], [11.9, 263.0], [12.0, 263.0], [12.1, 263.0], [12.2, 263.0], [12.3, 263.0], [12.4, 263.0], [12.5, 264.0], [12.6, 264.0], [12.7, 264.0], [12.8, 264.0], [12.9, 264.0], [13.0, 264.0], [13.1, 264.0], [13.2, 264.0], [13.3, 264.0], [13.4, 264.0], [13.5, 264.0], [13.6, 264.0], [13.7, 264.0], [13.8, 264.0], [13.9, 264.0], [14.0, 264.0], [14.1, 265.0], [14.2, 265.0], [14.3, 265.0], [14.4, 265.0], [14.5, 266.0], [14.6, 266.0], [14.7, 266.0], [14.8, 266.0], [14.9, 266.0], [15.0, 266.0], [15.1, 266.0], [15.2, 266.0], [15.3, 266.0], [15.4, 266.0], [15.5, 266.0], [15.6, 266.0], [15.7, 269.0], [15.8, 269.0], [15.9, 269.0], [16.0, 269.0], [16.1, 269.0], [16.2, 269.0], [16.3, 269.0], [16.4, 269.0], [16.5, 271.0], [16.6, 271.0], [16.7, 271.0], [16.8, 271.0], [16.9, 271.0], [17.0, 271.0], [17.1, 271.0], [17.2, 271.0], [17.3, 272.0], [17.4, 272.0], [17.5, 272.0], [17.6, 272.0], [17.7, 272.0], [17.8, 272.0], [17.9, 272.0], [18.0, 272.0], [18.1, 273.0], [18.2, 273.0], [18.3, 273.0], [18.4, 273.0], [18.5, 274.0], [18.6, 274.0], [18.7, 274.0], [18.8, 275.0], [18.9, 275.0], [19.0, 275.0], [19.1, 275.0], [19.2, 275.0], [19.3, 275.0], [19.4, 275.0], [19.5, 275.0], [19.6, 275.0], [19.7, 275.0], [19.8, 275.0], [19.9, 275.0], [20.0, 276.0], [20.1, 276.0], [20.2, 276.0], [20.3, 276.0], [20.4, 278.0], [20.5, 278.0], [20.6, 278.0], [20.7, 278.0], [20.8, 278.0], [20.9, 278.0], [21.0, 278.0], [21.1, 278.0], [21.2, 279.0], [21.3, 279.0], [21.4, 279.0], [21.5, 279.0], [21.6, 279.0], [21.7, 279.0], [21.8, 279.0], [21.9, 279.0], [22.0, 280.0], [22.1, 280.0], [22.2, 280.0], [22.3, 280.0], [22.4, 280.0], [22.5, 280.0], [22.6, 280.0], [22.7, 280.0], [22.8, 281.0], [22.9, 281.0], [23.0, 281.0], [23.1, 281.0], [23.2, 282.0], [23.3, 282.0], [23.4, 282.0], [23.5, 282.0], [23.6, 285.0], [23.7, 285.0], [23.8, 285.0], [23.9, 285.0], [24.0, 285.0], [24.1, 285.0], [24.2, 285.0], [24.3, 285.0], [24.4, 287.0], [24.5, 287.0], [24.6, 287.0], [24.7, 287.0], [24.8, 290.0], [24.9, 290.0], [25.0, 290.0], [25.1, 290.0], [25.2, 290.0], [25.3, 290.0], [25.4, 290.0], [25.5, 290.0], [25.6, 293.0], [25.7, 293.0], [25.8, 293.0], [25.9, 293.0], [26.0, 293.0], [26.1, 293.0], [26.2, 293.0], [26.3, 293.0], [26.4, 294.0], [26.5, 294.0], [26.6, 294.0], [26.7, 294.0], [26.8, 303.0], [26.9, 303.0], [27.0, 303.0], [27.1, 303.0], [27.2, 303.0], [27.3, 303.0], [27.4, 303.0], [27.5, 303.0], [27.6, 305.0], [27.7, 305.0], [27.8, 305.0], [27.9, 305.0], [28.0, 306.0], [28.1, 306.0], [28.2, 306.0], [28.3, 306.0], [28.4, 307.0], [28.5, 307.0], [28.6, 307.0], [28.7, 307.0], [28.8, 307.0], [28.9, 307.0], [29.0, 307.0], [29.1, 307.0], [29.2, 307.0], [29.3, 307.0], [29.4, 307.0], [29.5, 307.0], [29.6, 307.0], [29.7, 307.0], [29.8, 307.0], [29.9, 307.0], [30.0, 308.0], [30.1, 308.0], [30.2, 308.0], [30.3, 308.0], [30.4, 319.0], [30.5, 319.0], [30.6, 319.0], [30.7, 319.0], [30.8, 322.0], [30.9, 322.0], [31.0, 322.0], [31.1, 322.0], [31.2, 323.0], [31.3, 323.0], [31.4, 323.0], [31.5, 323.0], [31.6, 328.0], [31.7, 328.0], [31.8, 328.0], [31.9, 328.0], [32.0, 333.0], [32.1, 333.0], [32.2, 333.0], [32.3, 333.0], [32.4, 333.0], [32.5, 333.0], [32.6, 333.0], [32.7, 333.0], [32.8, 335.0], [32.9, 335.0], [33.0, 335.0], [33.1, 335.0], [33.2, 336.0], [33.3, 336.0], [33.4, 336.0], [33.5, 336.0], [33.6, 336.0], [33.7, 336.0], [33.8, 336.0], [33.9, 336.0], [34.0, 338.0], [34.1, 338.0], [34.2, 338.0], [34.3, 338.0], [34.4, 344.0], [34.5, 344.0], [34.6, 344.0], [34.7, 344.0], [34.8, 348.0], [34.9, 348.0], [35.0, 348.0], [35.1, 348.0], [35.2, 353.0], [35.3, 353.0], [35.4, 353.0], [35.5, 353.0], [35.6, 366.0], [35.7, 366.0], [35.8, 366.0], [35.9, 366.0], [36.0, 383.0], [36.1, 383.0], [36.2, 383.0], [36.3, 383.0], [36.4, 399.0], [36.5, 399.0], [36.6, 399.0], [36.7, 399.0], [36.8, 401.0], [36.9, 401.0], [37.0, 401.0], [37.1, 401.0], [37.2, 408.0], [37.3, 408.0], [37.4, 408.0], [37.5, 408.0], [37.6, 408.0], [37.7, 408.0], [37.8, 408.0], [37.9, 408.0], [38.0, 409.0], [38.1, 409.0], [38.2, 409.0], [38.3, 409.0], [38.4, 409.0], [38.5, 409.0], [38.6, 409.0], [38.7, 409.0], [38.8, 409.0], [38.9, 409.0], [39.0, 409.0], [39.1, 409.0], [39.2, 409.0], [39.3, 409.0], [39.4, 409.0], [39.5, 409.0], [39.6, 409.0], [39.7, 409.0], [39.8, 409.0], [39.9, 409.0], [40.0, 410.0], [40.1, 410.0], [40.2, 410.0], [40.3, 410.0], [40.4, 417.0], [40.5, 417.0], [40.6, 417.0], [40.7, 417.0], [40.8, 421.0], [40.9, 421.0], [41.0, 421.0], [41.1, 421.0], [41.2, 424.0], [41.3, 424.0], [41.4, 424.0], [41.5, 424.0], [41.6, 424.0], [41.7, 424.0], [41.8, 424.0], [41.9, 424.0], [42.0, 425.0], [42.1, 425.0], [42.2, 425.0], [42.3, 425.0], [42.4, 428.0], [42.5, 428.0], [42.6, 428.0], [42.7, 428.0], [42.8, 430.0], [42.9, 430.0], [43.0, 430.0], [43.1, 430.0], [43.2, 431.0], [43.3, 431.0], [43.4, 431.0], [43.5, 431.0], [43.6, 431.0], [43.7, 431.0], [43.8, 431.0], [43.9, 431.0], [44.0, 431.0], [44.1, 431.0], [44.2, 431.0], [44.3, 431.0], [44.4, 431.0], [44.5, 431.0], [44.6, 431.0], [44.7, 431.0], [44.8, 433.0], [44.9, 433.0], [45.0, 433.0], [45.1, 433.0], [45.2, 434.0], [45.3, 434.0], [45.4, 434.0], [45.5, 434.0], [45.6, 437.0], [45.7, 437.0], [45.8, 437.0], [45.9, 437.0], [46.0, 437.0], [46.1, 437.0], [46.2, 437.0], [46.3, 437.0], [46.4, 437.0], [46.5, 437.0], [46.6, 437.0], [46.7, 437.0], [46.8, 438.0], [46.9, 438.0], [47.0, 438.0], [47.1, 438.0], [47.2, 438.0], [47.3, 438.0], [47.4, 438.0], [47.5, 438.0], [47.6, 441.0], [47.7, 441.0], [47.8, 441.0], [47.9, 441.0], [48.0, 445.0], [48.1, 445.0], [48.2, 445.0], [48.3, 445.0], [48.4, 448.0], [48.5, 448.0], [48.6, 448.0], [48.7, 448.0], [48.8, 448.0], [48.9, 448.0], [49.0, 448.0], [49.1, 448.0], [49.2, 449.0], [49.3, 449.0], [49.4, 449.0], [49.5, 449.0], [49.6, 450.0], [49.7, 450.0], [49.8, 450.0], [49.9, 450.0], [50.0, 450.0], [50.1, 450.0], [50.2, 450.0], [50.3, 450.0], [50.4, 452.0], [50.5, 452.0], [50.6, 452.0], [50.7, 452.0], [50.8, 453.0], [50.9, 453.0], [51.0, 453.0], [51.1, 453.0], [51.2, 454.0], [51.3, 454.0], [51.4, 454.0], [51.5, 454.0], [51.6, 455.0], [51.7, 455.0], [51.8, 455.0], [51.9, 455.0], [52.0, 455.0], [52.1, 455.0], [52.2, 455.0], [52.3, 455.0], [52.4, 456.0], [52.5, 456.0], [52.6, 456.0], [52.7, 456.0], [52.8, 456.0], [52.9, 456.0], [53.0, 456.0], [53.1, 456.0], [53.2, 457.0], [53.3, 457.0], [53.4, 457.0], [53.5, 457.0], [53.6, 458.0], [53.7, 458.0], [53.8, 458.0], [53.9, 458.0], [54.0, 460.0], [54.1, 460.0], [54.2, 460.0], [54.3, 460.0], [54.4, 461.0], [54.5, 461.0], [54.6, 461.0], [54.7, 461.0], [54.8, 463.0], [54.9, 463.0], [55.0, 463.0], [55.1, 463.0], [55.2, 463.0], [55.3, 463.0], [55.4, 463.0], [55.5, 463.0], [55.6, 466.0], [55.7, 466.0], [55.8, 466.0], [55.9, 466.0], [56.0, 467.0], [56.1, 467.0], [56.2, 467.0], [56.3, 467.0], [56.4, 468.0], [56.5, 468.0], [56.6, 468.0], [56.7, 468.0], [56.8, 472.0], [56.9, 472.0], [57.0, 472.0], [57.1, 472.0], [57.2, 474.0], [57.3, 474.0], [57.4, 474.0], [57.5, 474.0], [57.6, 475.0], [57.7, 475.0], [57.8, 475.0], [57.9, 475.0], [58.0, 478.0], [58.1, 478.0], [58.2, 478.0], [58.3, 478.0], [58.4, 491.0], [58.5, 491.0], [58.6, 491.0], [58.7, 491.0], [58.8, 491.0], [58.9, 491.0], [59.0, 491.0], [59.1, 491.0], [59.2, 492.0], [59.3, 492.0], [59.4, 492.0], [59.5, 492.0], [59.6, 493.0], [59.7, 493.0], [59.8, 493.0], [59.9, 493.0], [60.0, 496.0], [60.1, 496.0], [60.2, 496.0], [60.3, 496.0], [60.4, 503.0], [60.5, 503.0], [60.6, 503.0], [60.7, 503.0], [60.8, 509.0], [60.9, 509.0], [61.0, 509.0], [61.1, 509.0], [61.2, 528.0], [61.3, 528.0], [61.4, 528.0], [61.5, 528.0], [61.6, 529.0], [61.7, 529.0], [61.8, 529.0], [61.9, 529.0], [62.0, 536.0], [62.1, 536.0], [62.2, 536.0], [62.3, 536.0], [62.4, 538.0], [62.5, 538.0], [62.6, 538.0], [62.7, 538.0], [62.8, 550.0], [62.9, 550.0], [63.0, 550.0], [63.1, 550.0], [63.2, 551.0], [63.3, 551.0], [63.4, 551.0], [63.5, 551.0], [63.6, 556.0], [63.7, 556.0], [63.8, 556.0], [63.9, 556.0], [64.0, 561.0], [64.1, 561.0], [64.2, 561.0], [64.3, 561.0], [64.4, 567.0], [64.5, 567.0], [64.6, 567.0], [64.7, 567.0], [64.8, 586.0], [64.9, 586.0], [65.0, 586.0], [65.1, 586.0], [65.2, 593.0], [65.3, 593.0], [65.4, 593.0], [65.5, 593.0], [65.6, 593.0], [65.7, 593.0], [65.8, 593.0], [65.9, 593.0], [66.0, 596.0], [66.1, 596.0], [66.2, 596.0], [66.3, 596.0], [66.4, 596.0], [66.5, 596.0], [66.6, 596.0], [66.7, 596.0], [66.8, 596.0], [66.9, 596.0], [67.0, 596.0], [67.1, 596.0], [67.2, 598.0], [67.3, 598.0], [67.4, 598.0], [67.5, 598.0], [67.6, 601.0], [67.7, 601.0], [67.8, 601.0], [67.9, 601.0], [68.0, 606.0], [68.1, 606.0], [68.2, 606.0], [68.3, 606.0], [68.4, 606.0], [68.5, 606.0], [68.6, 606.0], [68.7, 606.0], [68.8, 607.0], [68.9, 607.0], [69.0, 607.0], [69.1, 607.0], [69.2, 607.0], [69.3, 607.0], [69.4, 607.0], [69.5, 607.0], [69.6, 613.0], [69.7, 613.0], [69.8, 613.0], [69.9, 613.0], [70.0, 613.0], [70.1, 613.0], [70.2, 613.0], [70.3, 613.0], [70.4, 613.0], [70.5, 613.0], [70.6, 613.0], [70.7, 613.0], [70.8, 613.0], [70.9, 613.0], [71.0, 613.0], [71.1, 613.0], [71.2, 613.0], [71.3, 613.0], [71.4, 613.0], [71.5, 613.0], [71.6, 613.0], [71.7, 613.0], [71.8, 613.0], [71.9, 613.0], [72.0, 614.0], [72.1, 614.0], [72.2, 614.0], [72.3, 614.0], [72.4, 614.0], [72.5, 614.0], [72.6, 614.0], [72.7, 614.0], [72.8, 614.0], [72.9, 614.0], [73.0, 614.0], [73.1, 614.0], [73.2, 614.0], [73.3, 614.0], [73.4, 614.0], [73.5, 614.0], [73.6, 614.0], [73.7, 614.0], [73.8, 614.0], [73.9, 614.0], [74.0, 614.0], [74.1, 614.0], [74.2, 614.0], [74.3, 614.0], [74.4, 614.0], [74.5, 614.0], [74.6, 614.0], [74.7, 614.0], [74.8, 614.0], [74.9, 614.0], [75.0, 614.0], [75.1, 614.0], [75.2, 614.0], [75.3, 614.0], [75.4, 614.0], [75.5, 614.0], [75.6, 625.0], [75.7, 625.0], [75.8, 625.0], [75.9, 625.0], [76.0, 626.0], [76.1, 626.0], [76.2, 626.0], [76.3, 626.0], [76.4, 630.0], [76.5, 630.0], [76.6, 630.0], [76.7, 630.0], [76.8, 630.0], [76.9, 630.0], [77.0, 630.0], [77.1, 630.0], [77.2, 641.0], [77.3, 641.0], [77.4, 641.0], [77.5, 641.0], [77.6, 644.0], [77.7, 644.0], [77.8, 644.0], [77.9, 644.0], [78.0, 644.0], [78.1, 644.0], [78.2, 644.0], [78.3, 644.0], [78.4, 647.0], [78.5, 647.0], [78.6, 647.0], [78.7, 647.0], [78.8, 648.0], [78.9, 648.0], [79.0, 648.0], [79.1, 648.0], [79.2, 649.0], [79.3, 649.0], [79.4, 649.0], [79.5, 649.0], [79.6, 651.0], [79.7, 651.0], [79.8, 651.0], [79.9, 651.0], [80.0, 652.0], [80.1, 652.0], [80.2, 652.0], [80.3, 652.0], [80.4, 656.0], [80.5, 656.0], [80.6, 656.0], [80.7, 656.0], [80.8, 657.0], [80.9, 657.0], [81.0, 657.0], [81.1, 657.0], [81.2, 658.0], [81.3, 658.0], [81.4, 658.0], [81.5, 658.0], [81.6, 662.0], [81.7, 662.0], [81.8, 662.0], [81.9, 662.0], [82.0, 663.0], [82.1, 663.0], [82.2, 663.0], [82.3, 663.0], [82.4, 664.0], [82.5, 664.0], [82.6, 664.0], [82.7, 664.0], [82.8, 670.0], [82.9, 670.0], [83.0, 670.0], [83.1, 670.0], [83.2, 672.0], [83.3, 672.0], [83.4, 672.0], [83.5, 672.0], [83.6, 672.0], [83.7, 685.0], [83.8, 685.0], [83.9, 685.0], [84.0, 685.0], [84.1, 688.0], [84.2, 688.0], [84.3, 688.0], [84.4, 688.0], [84.5, 709.0], [84.6, 709.0], [84.7, 709.0], [84.8, 709.0], [84.9, 716.0], [85.0, 716.0], [85.1, 716.0], [85.2, 716.0], [85.3, 721.0], [85.4, 721.0], [85.5, 721.0], [85.6, 721.0], [85.7, 734.0], [85.8, 734.0], [85.9, 734.0], [86.0, 734.0], [86.1, 741.0], [86.2, 741.0], [86.3, 741.0], [86.4, 741.0], [86.5, 766.0], [86.6, 766.0], [86.7, 766.0], [86.8, 766.0], [86.9, 779.0], [87.0, 779.0], [87.1, 779.0], [87.2, 779.0], [87.3, 781.0], [87.4, 781.0], [87.5, 781.0], [87.6, 781.0], [87.7, 804.0], [87.8, 804.0], [87.9, 804.0], [88.0, 804.0], [88.1, 807.0], [88.2, 807.0], [88.3, 807.0], [88.4, 807.0], [88.5, 817.0], [88.6, 817.0], [88.7, 817.0], [88.8, 817.0], [88.9, 818.0], [89.0, 818.0], [89.1, 818.0], [89.2, 818.0], [89.3, 818.0], [89.4, 818.0], [89.5, 818.0], [89.6, 818.0], [89.7, 819.0], [89.8, 819.0], [89.9, 819.0], [90.0, 819.0], [90.1, 826.0], [90.2, 826.0], [90.3, 826.0], [90.4, 826.0], [90.5, 833.0], [90.6, 833.0], [90.7, 833.0], [90.8, 833.0], [90.9, 851.0], [91.0, 851.0], [91.1, 851.0], [91.2, 851.0], [91.3, 864.0], [91.4, 864.0], [91.5, 864.0], [91.6, 864.0], [91.7, 869.0], [91.8, 869.0], [91.9, 869.0], [92.0, 869.0], [92.1, 883.0], [92.2, 883.0], [92.3, 883.0], [92.4, 883.0], [92.5, 890.0], [92.6, 890.0], [92.7, 890.0], [92.8, 890.0], [92.9, 896.0], [93.0, 896.0], [93.1, 896.0], [93.2, 896.0], [93.3, 905.0], [93.4, 905.0], [93.5, 905.0], [93.6, 905.0], [93.7, 911.0], [93.8, 911.0], [93.9, 911.0], [94.0, 911.0], [94.1, 913.0], [94.2, 913.0], [94.3, 913.0], [94.4, 913.0], [94.5, 917.0], [94.6, 917.0], [94.7, 917.0], [94.8, 917.0], [94.9, 921.0], [95.0, 921.0], [95.1, 921.0], [95.2, 921.0], [95.3, 929.0], [95.4, 929.0], [95.5, 929.0], [95.6, 929.0], [95.7, 937.0], [95.8, 937.0], [95.9, 937.0], [96.0, 937.0], [96.1, 942.0], [96.2, 942.0], [96.3, 942.0], [96.4, 942.0], [96.5, 950.0], [96.6, 950.0], [96.7, 950.0], [96.8, 950.0], [96.9, 954.0], [97.0, 954.0], [97.1, 954.0], [97.2, 954.0], [97.3, 963.0], [97.4, 963.0], [97.5, 963.0], [97.6, 963.0], [97.7, 978.0], [97.8, 978.0], [97.9, 978.0], [98.0, 978.0], [98.1, 993.0], [98.2, 993.0], [98.3, 993.0], [98.4, 993.0], [98.5, 1006.0], [98.6, 1006.0], [98.7, 1006.0], [98.8, 1006.0], [98.9, 1045.0], [99.0, 1045.0], [99.1, 1045.0], [99.2, 1045.0], [99.3, 1078.0], [99.4, 1078.0], [99.5, 1078.0], [99.6, 1078.0], [99.7, 1388.0], [99.8, 1388.0], [99.9, 1388.0], [100.0, 1388.0]], "isOverall": false, "label": "Home Page Test", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 67.0, "series": [{"data": [[600.0, 42.0], [300.0, 25.0], [1300.0, 1.0], [700.0, 8.0], [200.0, 67.0], [400.0, 59.0], [800.0, 14.0], [900.0, 13.0], [500.0, 18.0], [1000.0, 3.0]], "isOverall": false, "label": "Home Page Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 99.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 151.0, "series": [{"data": [[0.0, 151.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 99.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.307999999999998, "minX": 1.7572071E12, "maxY": 4.307999999999998, "series": [{"data": [[1.7572071E12, 4.307999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572071E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 408.5, "minX": 1.0, "maxY": 514.8484848484851, "series": [{"data": [[4.0, 489.2314814814815], [2.0, 409.0], [1.0, 408.5], [5.0, 514.8484848484851], [3.0, 460.16666666666663], [6.0, 450.77777777777777]], "isOverall": false, "label": "Home Page Test", "isController": false}, {"data": [[4.307999999999998, 493.2160000000002]], "isOverall": false, "label": "Home Page Test-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 604.1666666666666, "minX": 1.7572071E12, "maxY": 19875.0, "series": [{"data": [[1.7572071E12, 19875.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7572071E12, 604.1666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572071E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 493.2160000000002, "minX": 1.7572071E12, "maxY": 493.2160000000002, "series": [{"data": [[1.7572071E12, 493.2160000000002]], "isOverall": false, "label": "Home Page Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572071E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 347.8759999999997, "minX": 1.7572071E12, "maxY": 347.8759999999997, "series": [{"data": [[1.7572071E12, 347.8759999999997]], "isOverall": false, "label": "Home Page Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572071E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 57.61199999999999, "minX": 1.7572071E12, "maxY": 57.61199999999999, "series": [{"data": [[1.7572071E12, 57.61199999999999]], "isOverall": false, "label": "Home Page Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572071E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 228.0, "minX": 1.7572071E12, "maxY": 1388.0, "series": [{"data": [[1.7572071E12, 1388.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7572071E12, 228.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7572071E12, 825.3000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7572071E12, 1061.1700000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7572071E12, 450.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7572071E12, 924.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572071E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 267.5, "minX": 1.0, "maxY": 1162.5, "series": [{"data": [[2.0, 1162.5], [8.0, 469.0], [1.0, 409.0], [9.0, 458.5], [10.0, 449.0], [5.0, 496.0], [11.0, 281.0], [12.0, 267.5], [6.0, 439.0], [7.0, 491.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 263.0, "minX": 1.0, "maxY": 757.5, "series": [{"data": [[2.0, 757.5], [8.0, 266.5], [1.0, 409.0], [9.0, 303.0], [10.0, 273.0], [5.0, 287.0], [11.0, 263.0], [12.0, 265.0], [6.0, 409.0], [7.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.7572071E12, "maxY": 4.166666666666667, "series": [{"data": [[1.7572071E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572071E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.7572071E12, "maxY": 4.166666666666667, "series": [{"data": [[1.7572071E12, 4.166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7572071E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.7572071E12, "maxY": 4.166666666666667, "series": [{"data": [[1.7572071E12, 4.166666666666667]], "isOverall": false, "label": "Home Page Test-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572071E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.7572071E12, "maxY": 4.166666666666667, "series": [{"data": [[1.7572071E12, 4.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7572071E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


  function Temp(c) {
    this.c = c;
    this.toF = function () {
      return this.c*1.8+32;
    }
    this.toK = function () {
      return this.c+273;
    }
  };
  var c = new Temp(25);
  document.writeln("Đổi 25C sang độ F: 25C = "+c.toF()+"F");
  document.writeln("<br>Đổi 25C sang độ K: 25C = "+c.toK()+"K");

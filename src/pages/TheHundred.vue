<template>
  <div id="box-wrapper">
    <div class="header-nav">
      <div class="img">
        <img src="../assets/logo2.png" alt="" />
      </div>
      <div class="certificate">
        <h4>Certificate Verification</h4>
        <h3>U0762968</h3>
      </div>
    </div>
    <div class="main-body">
      <div class="basic">
        <table class="tabled">
          <thead>
            <tr>
              <th colspan="2">
                <h4>BASIC INFORMATION OF CERTIFICATE</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="17%">
                <b>Exporter Name</b>
                <span class="merge">1</span>
              </td>
              <td>
                DEBİ ULUSLARARASI GIDA TEKSTİL ELEKTRONİK VE OTOMOTİV SANAYİ VE
                TİCARET LİMİTED ŞİRKETİ
              </td>
            </tr>
            <tr>
              <td width="17%">
                <b>Exporter Address</b>
                <span class="merge">1</span>
              </td>
              <td>
                KÜÇÜKBAKKALKÖY ALİ AY SOK. ORKİDE APT.NO.3/4 ATAŞEHİR/İSTANBUL
              </td>
            </tr>
            <tr>
              <td width="17%">
                <b>Consignee Name</b>
                <span class="merge">2</span>
              </td>
              <td>OOO ASAN CORE PRODUCT</td>
            </tr>
            <tr>
              <td width="17%">
                <b>Consignee Address</b>
                <span class="merge">2</span>
              </td>
              <td>REPUBLIC OF UZBEKİSTAN TASHKENT CITY CHILANZAR</td>
            </tr>
            <tr>
              <td width="17%">
                <b>Consignee Country</b>
                <span class="merge">2</span>
              </td>
              <td>Uzbekistan</td>
            </tr>
            <tr>
              <td width="17%">
                <b>Transport Details</b>
                <span class="merge">4</span>
              </td>
              <td>BY TRUCK</td>
            </tr>
            <tr>
              <td width="17%">
                <b>Country of Origin</b>
                <span class="merge">3</span>
              </td>
              <td>Turkey</td>
            </tr>
            <tr>
              <td width="17%">
                <b>Place and Date of Issue</b>
                <span class="merge">8</span>
              </td>
              <td>ISTANBUL Chamber Of Commerce / 03.Dec.2021</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="desc">
        <table class="tabled">
          <thead>
            <tr>
              <th colspan="2">
                <h4>DESCRIPTION OF GOODS</h4>
              </th>
            </tr>
            <tr>
              <th>
                Marks, numbers, number and kind of packages, description of
                goods
                <span class="merge">6</span>
              </th>
              <th>
                Quantity
                <span class="merge">7</span>
              </th>
            </tr>
          </thead>
          <tr>
            <td>100 PCS</td>
            <td width="25%" class="right">2,530.00 KG</td>
          </tr>
          <tr>
            <td>GIDA KATKI MAD. SAPP 28</td>
            <td></td>
          </tr>
          <tr>
            <td>INVOİCE GIB2021000000275-02.12.2021</td>
            <td></td>
          </tr>
          <tr>
            <td>THE GOODS ARE OF TURKISH ORIGIN</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#box-wrapper {
  width: 97.5%;
  margin: 0 auto;
}
.header-nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f5f5f5;
  border: 1px solid #ddd;
}
.img {
  width: 151px;
  height: 96px;
  text-align: center;
}
img {
  /* 66% */
  width: 100%;
}
.certificate {
  align-self: center;
  text-align: right;
}
.certificate h4 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin: 10px 0;
}
.certificate h3 {
  font-size: 24px;
  font-weight: 500;
  margin: 20px 0 10px;
}
.basic,
.desc {
  padding: 15px;
  border: 1px solid #ddd;
  border-top: none;
}
.basic {
  padding-bottom: 0;
  border-bottom: none;
}
.desc {
  padding-top: 0;
}
.basic tr td:nth-child(1) {
  color: #333;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.tabled {
  border: 1px solid #ddd;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
table thead tr:first-child {
  background-color: #f5f5f5;
  cursor: pointer;
  border-bottom: 2px solid #ddd;
}
th,
td {
  padding: 5px;
  border: 1px solid #ddd;
}
th {
  color: #333;
}
th h4 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
  text-align: left;
}
tr td,
.desc table thead tr:nth-child(2) {
  vertical-align: middle;
  text-align: left;
  padding: 6px;
}
td b,
td,
.desc table thead tr:nth-child(2) {
  font-size: 12px;
  /* padding: 5px; */
}
.desc table thead tr:nth-child(2) {
  background-color: #f5f5f5;
}
.desc table thead tr:nth-child(2) th {
  padding: 6px;
}
.merge {
  float: right !important;
  background-color: #5bc0de;
  padding: 0.2em 0.6em 0.3em;
  font-size: 9px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
}
.right {
  text-align: right;
}
@media screen and (max-width: 576px) {
  .basic tbody tr td:nth-child(1) {
    width: 20%;
  }
}
</style>

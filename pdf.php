<?php include("inc/functions.php"); ?>
<?php include("inc/header.inc.php"); ?>
<?php $item = 3; ?>
<?php include("inc/menu.inc.php"); ?>
<div id="page" style="height:60px;">
  <div id="content">
    <form action="/pdf/pdf.php">
      <select name='city'>
        <option disabled selected value> -- Select a city -- </option>
        <option value="Arlington and Mid-Cities">Arlington and Mid-Cities</option>
        <option value="Fort Worth">Fort Worth</option>
        <option value="Area Fort Worth Cities">Area Fort Worth Cities</option>
        <option value="Dallas">Dallas</option>
        <option value="North Dallas Area">North Dallas Area</option>
        <option value="South Dallas Area">South Dallas Area</option>
        <option value="Garland, Mesquite, Rowlett, Rockwell and Area">Garland, Mesquite, Rowlett, Rockwell and Area</option>
        <option value="Ellis County Area">Ellis County Area</option>
        <option value="Investor Tarrant Co. Area">Investor Tarrant Co. Area</option>
        <option value="Investor Dallas Co. Area">Investor Dallas Co. Area</option>
        <option value="Lubbock">Lubbock</option>
        <option value="Land/Acreage/Lots">Land/Acreage/Lots</option>
        <option value="Rental Homes">Rental Homes</option>
      </select>
      <input type="submit">
    </form>
  </div>
</div>
<?php include("inc/footer.inc.php"); ?>

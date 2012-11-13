<?php
$a = null;
$b = null;
$c = null;
$i = null;
//$max = 1000000000;
$max = 1000000;
$start = microtime(true);
var_dump(microtime(true));
for ($i = 0; $i < $max; $i++) {
    $a = 1234 + 5678 + $i;
    $b = 1234 * 5678 + $i;
    $c = 1234 / 2 + $i;
}
var_dump(microtime(true));
var_dump(microtime(true) - $start);
?>
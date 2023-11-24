<?php

$source_file = "org.csv";

function h($str) {
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$fp = fopen($source_file, 'r');
flock($fp, LOCK_SH);
?>

<ul class="list">
  <?php
  while ($row = fgetcsv($fp)) {
    $rows[] = $row;
  }
  ?>
  <?php if (!empty($rows)) : ?>
    <?php shuffle($rows); foreach ($rows as $row):?>
      <li class="<?= h($row[1]) ?> <?= h($row[2]) ?> <?= h($row[3]) ?>" data-weight="<?= h($row[1]) ?>" data-size="<?= h($row[2]) ?>" data-feel="<?= h($row[3]) ?>">
        <?= h($row[0]) ?>
      </li>
    <?php endforeach; ?>
  <?php else : ?>
  <?php endif; ?>
</ul>

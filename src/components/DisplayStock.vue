<template>
    <el-table :data="data">
        <el-table-column prop="symbol" label="Symbol" width="180">
            
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="trade" label="Price" width="180"></el-table-column>
        <el-table-column prop="pricechange" label="Change" width="180"></el-table-column>
        <el-table-column prop="changepercent" label="Change Percent" width="180"></el-table-column>
        <el-table-column prop="volume" label="Volume" width="180"></el-table-column>
        <el-table-column prop="avgVolume" label="Avg Volume" width="180"></el-table-column>
        <el-table-column prop="mktcap" label="Market Cap" width="180"></el-table-column> 
        <el-table-column prop="per" label="PE Ratio" width="180"></el-table-column>
        <el-table-column prop="high" label="High" width="180"></el-table-column>
        <el-table-column prop="low" label="Low" width="180"></el-table-column>
        <el-table-column prop="ytdChange" label="YTD Change" width="180"></el-table-column>
        <el-table-column prop="ticktime" label="Last Updated" width="180"></el-table-column>

    </el-table>
</template>
<script setup lang="ts">
import { da } from 'element-plus/es/locales.mjs';
import { get } from 'http';
import { onMounted, ref } from 'vue'
import { getStocks } from "~/api/market"
const data = ref([]);
onMounted(async () => {
    const result = await getStocks();
    data.value = result.data;
console.log(data);
});
</script>
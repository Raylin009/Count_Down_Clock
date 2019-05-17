const express = require('express');
const app = express()

app.use(express.static('/Users/raylin/Documents/hackreactor2019/ghrsea01-GraduationCountDown/dist'))

app.listen(3021,()=>console.log('listeninig on 3021...'))
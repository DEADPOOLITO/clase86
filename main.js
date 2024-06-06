var nombre_alumno_array = [];

function submit()
{
    var ver_alumno_array = [];

    for (var s = 1; s <= 4; s++)

{
    var nombre_alumno = document.getElementById("nombre_alumno_"+s).value
    console.log(nombre_alumno);
    nombre_alumno_array.push(nombre_alumno);
}
{
    console.log(nombre_alumno_array);

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);

    for (var t = 0; t < longitud_nombre_alumnos_array; t++)

{
    ver_alumno_array.push("<h4>NOMBRE -"+ nombre_alumno_array[t] + "<h4>");
    console.log(ver_alumno_array);
}
{
    console.log(ver_alumno_array);
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;

    var remove_commas = ver_alumno_array.join(" ");
    console.log(remove_commas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = remove_commas;
}
}
function sorting()
{
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);

    var ver_alumno_array_ordenar = [];

    console.log(longitud_nombre_alumnos_array);
}
}
// Set points via the dev console to see grades as point values instead of percentages
let points = null

$(() => {
    // Add tfoot to rubric
    $('table.rubric').append(`
    <tfoot style="display: none;">
        <tr style="font-weight: bold; border-top: 1px solid black;">
            <td colspan="7" style="text-align: right;">Grade:</td>
            <td id="grade"></td>
        </tr>
    </tfoot>
    `)

    // Add button to clear grade
    $('table.rubric thead tr:last-child th:last-child').html(
        `<button style="display: none;" id="clear">&times;</button>`
    )

    // Watch points for changes
    let old = points
    setInterval(() => {
        if (old !== points) {
            if (points !== null && (!+points || +points < 0)) points = null
            old = points
            calcGrade()
        }
    }, 500)

    $('button#clear').click(function() {
        $(this).hide()
        $('table.rubric td.selected').removeClass('selected')
        $('table.rubric tfoot').hide()
        points = null
    })

    $('table.rubric tbody td:not(:first-child):not(:last-child)').click(function() {
        // Show selection
        $(this).siblings().removeClass('selected')
        $(this).toggleClass('selected')

        // Update grade
        calcGrade()
    })

    function calcGrade() {
        const $rows = $('table.rubric tbody tr')

        const selectedCount = $('table.rubric tbody td:not(:first-child):not(:last-child).selected').length
        const criteriaCount = $rows.length

        if (selectedCount > 0) $('#clear').show()
        else $('#clear').hide()

        if (selectedCount !== criteriaCount) return $('table.rubric tfoot').hide()

        // Calculate grade
        let grade = 0
        $rows.each(function(i) {
            const $row = $(`table.rubric tbody tr:nth-child(${i + 1})`)
            const weight = +$row.children().last().text().replace(/%/g, '') / 100
            const colNum = $row.children('.selected').prevAll().length + 1
            const score = +$(`table.rubric thead tr:last-child :nth-child(${colNum})`).text().replace(/%/g, '') / 100
            grade += score * weight
        })

        // Display grade
        $('#grade').text(`${(grade * (points || 100)).toFixed(2)}${points ? `/${points.toFixed(2)}` : '%'}`)
        $('table.rubric tfoot').show()
    }
})

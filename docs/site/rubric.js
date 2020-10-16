$(() => {
    let points = 0

    // Add tfoot to rubric
    $('table.rubric').append(`
    <tfoot style="display: none;">
        <tr style="font-weight: bold; border-top: 1px solid black;">
            <td colspan="7" style="text-align: right;">
                <span class="float-left mt-1 mr-1">Points: </span>
                <input type="number" min="0" step="10" class="form-control form-control-sm float-left" id="points" value="${points}">
                <button class="btn btn-sm btn-danger float-left ml-1" id="percent">&times;</button>
                <span class="mt-1 float-right">Grade:</span>
            </td>
            <td id="grade"></td>
        </tr>
    </tfoot>
    `)

    // Add button to clear grade
    $('table.rubric thead tr:last-child th:last-child').html(
        `<button class="btn btn-danger btn-sm" style="display: none;" id="clear">&times;</button>`
    )

    $('button#percent').click(function() {
        $('input#points').val(0)
        points = 0
        calcGrade()
    })

    $('button#clear').click(function() {
        $(this).hide()
        $('table.rubric td.selected').removeClass('selected')
        $('table.rubric tfoot').hide()
        points = 0
        $('input#points').val(0)
    })

    $('input#points').change(function() {
        points = $(this).val()
        calcGrade()
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
        $('#grade').text(`${(grade * (points || 100)).toFixed(2)}${points > 0 ? `/${(+points).toFixed(2)}` : '%'}`)
        $('table.rubric tfoot').show()
    }
})

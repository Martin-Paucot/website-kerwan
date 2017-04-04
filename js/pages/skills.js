$(".animsition").animsition({
    inClass: 'zoom-in'
});

$('[data-tooltip!=""]').qtip({ // Grab all elements with a non-blank data-tooltip attr.
    content: {
        attr: 'data-tooltip',
    },
    position:
    {
        my: 'centerLeft',
        at: 'centerRight'
    },
    style: 'qtip-dark'
})
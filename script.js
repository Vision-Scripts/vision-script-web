document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animations or loading of content
    function handleViewport() {
        sections.forEach(function(section) {
            if (isInViewport(section) && !section.classList.contains('loaded')) {
                section.classList.add('loaded'); // Add a class to mark it as loaded
                // Implement your animation or loading logic here
            }
        });
    }

    // Call handleViewport initially
    handleViewport();

    // Listen for scroll and resize events
    document.addEventListener('scroll', function() {
        handleViewport();
    });

    window.addEventListener('resize', function() {
        handleViewport();
    });
});

document.addEventListener('mousemove', function(e) {
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

// Function to activate custom cursor on hover
function activateCursor() {
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.classList.add('active');
}

// Function to deactivate custom cursor
function deactivateCursor() {
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.classList.remove('active');
}

// Apply custom cursor to links or buttons on hover
var hoverElements = document.querySelectorAll('a, button');

hoverElements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        activateCursor();
    });

    element.addEventListener('mouseleave', function() {
        deactivateCursor();
    });
});

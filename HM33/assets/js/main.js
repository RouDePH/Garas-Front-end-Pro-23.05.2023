document.getElementById('searchBtn').addEventListener('click', function () {
    
    const commentsContainer = document.getElementById('commentsContainer');
    const postId = document.getElementById('postId').value;

    if (postId < 1 || postId > 100) {
        alert('Неверный идентификатор сообщения. Пожалуйста, введите число от 1 до 100.');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пост не найден');
            }
            return response.json();
        })
        .then(post => {
            const postContainer = document.getElementById('postContainer');
            commentsContainer.innerHTML = '';
            postContainer.innerHTML = `
            <div class="post">
                <h2>${firstLettertoUpperCase(post.title)}</h2>
                <p>${firstLettertoUpperCase(post.body)}</p>
                <button id="getCommentsBtn">Получить комментарии</button>
            </div>
            `;

            document.getElementById('getCommentsBtn').addEventListener('click', function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Комментарии не найдены');
                        }
                        return response.json();
                    })
                    .then(comments => {
                        commentsContainer.innerHTML = '';
                        comments.forEach(comment => {
                            const commentElement = document.createElement('div');
                            commentElement.className = 'comment';
                            commentElement.innerHTML = `
                  <h4>${firstLettertoUpperCase(comment.name)}</h4>
                  <p>${firstLettertoUpperCase(comment.body)}</p>
                `;
                            commentsContainer.appendChild(commentElement);
                        });
                        commentsContainer.style.display = 'block';
                    })
                    .catch(error => {
                        alert('Не удалось загрузить комментарии: ' + error.message);
                    });
            });
        })
        .catch(error => {
            alert('Не удалось получить сообщение: ' + error.message);
        });
});

const firstLettertoUpperCase = (data) => {
    if(typeof data === 'string' && data.length  > 1){
        return  data.charAt(0).toUpperCase() + data.slice(1);   
    }else {
        return data;
    }
}

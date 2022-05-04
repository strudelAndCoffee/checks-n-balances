let db;
const request = indexedDB.open('checks_n_balances', 1);

// The following code blocks were copied and modified from The University of Texas Code Bootcamp Module 18 project.
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_budget_input', { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.online) {
        uploadData();
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(['new_budget_input'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_budget_input');
    budgetObjectStore.add(record);
};

function uploadData() {
    const transaction = db.transaction(['new_budget_input'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_budget_input');
    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            // copied fetch request from index.js sendTransaction function
            fetch("/api/transaction", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(serverRes => {
                if (serverRes.message) {
                    throw new Error(serverResponse)
                }
                const transaction = db.transaction(['new_budget_input'], 'readwrite');
                const budgetObjectStore = transaction.objectStore('new_budget_input');
                budgetObjectStore.clear();

                alert("All saved data has been submitted.")
            })
            .catch(err => console.log(err));
        }
    }
};

window.addEventListener('online', uploadData);
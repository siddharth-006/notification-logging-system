# Notification System Design

## Stage 1 Approach

### Goal

Display top N priority notifications efficiently without storing data in DB.

---

## Priority Logic

Notifications are ranked based on:

1. Type Weight:

   * Placement (3)
   * Result (2)
   * Event (1)

2. Timestamp (latest first)

---

## Algorithm

1. Fetch notifications from API
2. Apply sorting:

   * Compare type weight
   * If equal → compare timestamp
3. Return top N (default = 10)

Time Complexity:

* Sorting: O(n log n)
* Selection: O(n)

---

## Scalability Considerations

For large-scale systems:

* Use Max Heap (priority queue) → O(n log k)
* Streaming updates → maintain rolling top N
* Cache top results for faster access

---

## Real-Time Handling

New notifications:

* Insert into priority structure
* Recompute top N efficiently

---

## Logging Strategy

All key events are logged:

* API fetch
* Errors
* User actions (view notification)

---

## Conclusion

The system ensures:

* Efficient prioritization
* Scalability for high-volume streams
* Clear separation of concerns (API, UI, logic)

package com.swpproject.koi_care_system.repository;

import com.swpproject.koi_care_system.models.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Long> {
    List<Reminder> findAllByDateTimeAfter(LocalDateTime now);

    List<Reminder> findAllByDateTimeBetween(LocalDateTime localDateTime, LocalDateTime localDateTime1);

    List<Reminder> findAllByDateTime(LocalDateTime now);
}

# rock-reservations Specification

## Purpose

Define the inline reservation flow that lets a visitor choose an edition, submit fictional details, receive a certificate, and keep the record in the browser.

## Requirements

### Requirement: Reservation form composition

The reservation section SHALL provide an edition selector, a name field, an email field, and a required consent checkbox stating that the visitor understands the rock does nothing. The edition MAY arrive preselected from another section. The form SHALL NOT contain payment, card, or checkout fields.

#### Scenario: Default form

- **WHEN** the visitor reaches the reservation section without a prior selection
- **THEN** the form shows the edition selector, name, email, and consent fields, with no edition selected.

#### Scenario: Preselected edition

- **WHEN** the visitor arrives from an edition reservation action
- **THEN** that edition is already selected in the form.

#### Scenario: No payment fields

- **WHEN** the form renders
- **THEN** no card number, CVV, billing address, or payment button is present.

### Requirement: Reservation validation

The form SHALL require a name with at least two characters, a valid email address, a selected edition, and the consent checkbox. Invalid fields SHALL show inline messages associated with their inputs, expose an invalid state to assistive technology, and move focus to the first invalid field on submit.

#### Scenario: Invalid email

- **WHEN** the visitor submits an email without a valid address format
- **THEN** an inline error describes the problem, the field is marked invalid, and focus moves to it.

#### Scenario: Missing consent

- **WHEN** the visitor submits without checking the consent box
- **THEN** the form does not submit and an inline message explains that consent is required.

#### Scenario: Correction clears error

- **WHEN** the visitor corrects a field that was invalid
- **THEN** its error message is removed as soon as the value becomes valid.

### Requirement: Simulated submission

On a valid submit, the form SHALL disable its controls, show a progress message in the brand's tone, and complete after a short simulated delay without sending any network request. Repeated activation SHALL NOT create duplicate submissions.

#### Scenario: Successful submission

- **WHEN** the visitor submits a valid form
- **THEN** the controls are disabled, a progress message appears, and the success state follows after the simulated delay.

#### Scenario: Repeated activation

- **WHEN** the visitor activates the submit control more than once while a submission is pending
- **THEN** only one reservation is created.

### Requirement: Certificate and download

The success state SHALL show a "Certificado de Inutilidade" containing the visitor's name, the edition, a protocol number, the issue date, and a fictional queue position. The certificate SHALL be downloadable as a `.txt` file whose filename includes the protocol, and the download SHALL work without a network request.

#### Scenario: Certificate content

- **WHEN** a reservation succeeds
- **THEN** the certificate shows the submitted name, the selected edition, a protocol, the date, and a queue position.

#### Scenario: Download

- **WHEN** the visitor activates the download control
- **THEN** a text file named with the protocol is produced containing the certificate text.

#### Scenario: Announced success

- **WHEN** the success state replaces the form
- **THEN** the certificate heading receives focus and the status is announced to assistive technology.

### Requirement: Reservation persistence

The application SHALL store the reservation in browser local storage under a versioned key. On a later visit, the page SHALL restore the success state and certificate. If storage is unavailable or fails, the success state SHALL still appear in memory with a non-blocking notice. The visitor SHALL be able to start a new reservation, which clears the stored entry.

#### Scenario: Reload restores reservation

- **WHEN** the visitor reloads the page after a successful reservation
- **THEN** the reservation section shows the stored certificate and queue position instead of an empty form.

#### Scenario: Storage unavailable

- **WHEN** browser storage cannot be read or written
- **THEN** the reservation still succeeds in memory and a notice explains that it will not persist.

#### Scenario: New reservation

- **WHEN** the visitor activates "nova reserva"
- **THEN** the stored entry is cleared and the empty form returns.

### Requirement: Shared reservation requests

Reservation actions elsewhere on the page SHALL bring the reservation form into view. When the action carries an edition, the form SHALL receive it; when it does not, the current selection SHALL be left unchanged. A manual edition change in the form SHALL become the current selection.

#### Scenario: CTA with edition

- **WHEN** the visitor activates a reservation action tied to an edition
- **THEN** the form is visible with that edition selected.

#### Scenario: CTA without edition

- **WHEN** the visitor activates the header reservation CTA
- **THEN** the form is visible and no edition is forced.

#### Scenario: Manual override

- **WHEN** the visitor changes the edition in the form
- **THEN** the new edition is used for the reservation and reflects the current selection.

### Requirement: Reservation privacy

The reservation flow SHALL keep the name, email, edition, and certificate in the visitor's browser. It SHALL NOT transmit reservation data over the network or require an account.

#### Scenario: No network transmission

- **WHEN** a reservation is submitted
- **THEN** no request carrying the name, email, or reservation payload is sent.

### Requirement: Reservation accessibility

The reservation flow SHALL be completable by keyboard alone, with visible focus, programmatically associated labels and errors, and status messages announced without moving focus unexpectedly.

#### Scenario: Keyboard completion

- **WHEN** a keyboard-only visitor fills and submits the form
- **THEN** every field, the consent box, the submit control, and the download control are reachable in a logical order.
